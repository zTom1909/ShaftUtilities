export default scrapNotifFunction = (event) => {
  const data = JSON.parse(FileLib.read("ShaftUtilities", "data.json"));
  if (!data.scrapNotification) return;
  ChatLib.chat("&6&lSCRAP! &7You found a scrap by mining!");
  ChatLib.chat(
    new Message(
      new TextComponent("&e&lCLICK HERE")
        .setHoverValue("&7Warp to the &6Base Camp")
        .setClick("run_command", "/warp camp"),
      "&7 to warp out!"
    )
  );
};
