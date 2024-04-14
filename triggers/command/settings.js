export default (value, type) => {
  let dataValue = false;
  const data = JSON.parse(FileLib.read("ShaftUtilities", "data.json"));
  if (value.toLowerCase() === "on" || value.toLowerCase() === "true")
    dataValue = true;
  else if (value.toLowerCase() === "off" || value.toLowerCase() === "false")
    dataValue = false;
  else
    return ChatLib.chat(
      "&3[&bShaftUtilities&3] &cError! Valid options are [on / off]"
    );

  switch (type) {
    case "Auto transfer":
      data.autoTransfer = dataValue;
      break;
    case "Auto warp":
      data.autoWarp = dataValue;
      break;
    case "Mineshaft announcement":
      data.shaftAnnouncement = dataValue;
      break;
    case "Scrap notification":
      data.scrapNotification = dataValue;
      break;
    case "Corpse finder":
      data.corpseFinder = dataValue;
      break;
  }
  FileLib.write("ShaftUtilities", "data.json", JSON.stringify(data));
  return ChatLib.chat(
    `&3[&bShaftUtilities&3] &a${type} has been set to ${value}`
  );
};
