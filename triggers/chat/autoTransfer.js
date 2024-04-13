export const autoTransferFunction = (name, message, event) => {
  if (message.startsWith(".transfer") || message.startsWith("!transfer")) {
    const data = JSON.parse(FileLib.read("ShaftUtilities", "data.json"));
    if (!data.autoTransfer) return;
    const messageArray = message.split(" ");
    if (messageArray.length === 2)
      ChatLib.command(`p transfer ${messageArray[1]}`);
    else ChatLib.command(`p transfer ${name}`);
  }
};

export const autoTransferCriteria = "Party > ${*} ${name}: ${message}";
