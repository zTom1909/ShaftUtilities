import { removeUnicode } from "../utils/functions";

let loggedCoords = [];
const formattedArmor = {
  "Lapis Armor Helmet": "Lapis",
  "Mineral Helmet": "Tungsten",
  "Yog Helmet": "Umber",
  "Vanguard Helmet": "Vanguard",
};
const corpseMessages = [];

export default register("step", () => {
  const location = Scoreboard.getLines()
    .filter((line) => line.toString().split("").includes("⏣"))[0]
    ?.toString();
  const locationString = removeUnicode(ChatLib.removeFormatting(location));
  if (!locationString.includes("Glacite Mineshafts")) return;
  
  const data = JSON.parse(FileLib.read("ShaftUtilities", "data.json"));
  if (!data.corpseFinder) return;

  const entities = World.getAllEntitiesOfType(
    net.minecraft.entity.item.EntityArmorStand
  ).map((entity) => new EntityLivingBase(entity.entity));

  const corpses = entities.filter((entity) => {
    const armorName = entity.getItemInSlot(4)?.getName()?.removeFormatting();
    return (
      armorName === "Lapis Armor Helmet" ||
      armorName === "Mineral Helmet" ||
      armorName === "Yog Helmet" ||
      armorName === "Vanguard Helmet"
    );
  });

  const formattedCorpses = corpses.map((corpse) => {
    const armorName = corpse.getItemInSlot(4)?.getName()?.removeFormatting();
    return {
      type: formattedArmor[armorName],
      posX: Math.floor(corpse.getX()),
      posY: Math.floor(corpse.getY()),
      posZ: Math.floor(corpse.getZ()),
    };
  });

  formattedCorpses.forEach((corpse, index) => {
    const coords = {
      x: corpse.posX,
      y: corpse.posY,
      z: corpse.posZ,
    };

    const alreadyLogged = loggedCoords.some((coord) => {
      return (
        coord.x === coords.x && coord.y === coords.y && coord.z === coords.z
      );
    });

    if (!alreadyLogged) {
      corpseMessages.push(`${corpse.type} corpse found! #${index + 1}`);
      corpseMessages.push(
        `x: ${corpse.posX}, y: ${corpse.posY}, z: ${corpse.posZ}`
      );
    }
    loggedCoords.push(coords);
  });

  if (corpseMessages.length) {
    ChatLib.command(`pc ${corpseMessages[0]}`);
    corpseMessages.shift();
  }
})
  .setFps(4)
  .setDelay(2);
