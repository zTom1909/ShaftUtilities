export default autoTransferFunction = (name, message, event) => {
  if (message.startsWith(".transfer") || message.startsWith("!transfer")) {
    const data = JSON.parse(FileLib.read("ShaftUtilities", "data.json"));
    if (!data.autoTransfer) return;

    const messageArray = message.split(" ");
    if (messageArray.length === 2)
      ChatLib.command(`p transfer ${messageArray[1]}`);
    else {
      const fixedName = name.removeFormatting().split(" ")[0];
      if (Player.getName().toLowerCase() === fixedName.toLowerCase()) return;
      ChatLib.command(`p transfer ${fixedName}`);
    }
  }
};
