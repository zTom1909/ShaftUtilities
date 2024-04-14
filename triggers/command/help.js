export default () => {
  const data = JSON.parse(FileLib.read("ShaftUtilities", "data.json"));
  const autoTransferColor = data.autoTransfer ? "&a" : "&c";
  const autoWarpColor = data.autoWarp ? "&a" : "&c";
  const scrapNotifColor = data.scrapNotification ? "&a" : "&c";
  const shaftAnnouncementColor = data.shaftAnnouncement ? "&a" : "&c";
  const corpseFinderColor = data.corpseFinder ? "&a" : "&c";
  
  const lineBreak = ChatLib.getChatBreak("&9&l&m-");
  ChatLib.chat(lineBreak);
  ChatLib.chat(ChatLib.getCenteredText("&bShaftUtilities Help"));
  ChatLib.chat("&3&lHELP &7➤ &b/su help");
  ChatLib.chat("&8| &fOpens this command list");
  ChatLib.chat(
    new TextComponent(
      `${autoTransferColor}⦿ &3&lAUTO TRANSFER &7➤ &b/su autotransfer`
    ).setHoverValue("&7&lUSAGE &8➤ &e/su autotransfer <on/off>")
  );
  ChatLib.chat(
    "&8| &fEnables transferring the party to anyone typing .transfer"
  );
  ChatLib.chat(
    new TextComponent(
      `${autoWarpColor}⦿ &3&lAUTO WARP &7➤ &b/su autowarp`
    ).setHoverValue("&7&lUSAGE &8➤ &e/su autowarp <on/off>")
  );
  ChatLib.chat(
    "&8| &fEnables automatically warping the party when anyone types .warp"
  );
  ChatLib.chat(
    new TextComponent(
      `${shaftAnnouncementColor}⦿ &3&lMINESHAFT ANNOUNCEMENT &7➤ &b/su shaftannouncement`
    ).setHoverValue("&7&lUSAGE &8➤ &e/su shaftannouncement <on/off>")
  );
  ChatLib.chat(
    "&8| &fAutomatically types .transfer in party chat when finding a mineshaft"
  );
  ChatLib.chat(
    new TextComponent(
      `${scrapNotifColor}⦿ &3&lSCRAP NOTIFICATION &7➤ &b/su scrapnotif`
    ).setHoverValue("&7&lUSAGE &8➤ &e/su scrapnotif <on/off>")
  );
  ChatLib.chat(
    "&8| &fSends a message in chat to warp out after mining out a scrap"
  );
  ChatLib.chat(
    new TextComponent(
      `${corpseFinderColor}⦿ &3&lCORPSE FINDER &7➤ &b/su corpsefinder`
    ).setHoverValue("&7&lUSAGE &8➤ &e/su corpsefinder <on/off>")
  );
  ChatLib.chat(
    "&8| &fAutomatically finds corpses in a mineshaft and sends its cords in party chat"
  );
  ChatLib.chat(lineBreak);
};
