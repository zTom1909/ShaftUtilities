export const shaftAnnouncementFunction = (event) => {
  const data = JSON.parse(FileLib.read("ShaftUtilities", "data.json"));
  if (!data.shaftAnnouncement) return;
  ChatLib.command(`pc .transfer ➤ Mineshaft found`);
};

export const shaftAnnouncementCriteria = "WOW! You found a Glacite Mineshaft portal!";
