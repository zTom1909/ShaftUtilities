export default autoWarpFunction = (name, message, event) => {
  if (message.startsWith(".warp") || message.startsWith("!warp")) {
    const data = JSON.parse(FileLib.read("ShaftUtilities", "data.json"));
    if (!data.autoWarp) return;
    const fixedName = name.split(" ")[0].removeFormatting();
    ChatLib.command(`p warp ${fixedName}`);
  }
};
