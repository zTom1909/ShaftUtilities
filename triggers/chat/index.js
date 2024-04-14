import autoTransfer from "./autoTransfer";
import autoWarp from "./autoWarp";
import shaftAnnouncement from "./shaftAnnouncement";
import scrapNotif from "./scrapNotif";

import {
  partyChatCriteria,
  shaftAnnouncementCriteria,
  scrapNotifCriteria,
} from "../utils/constants";

register("chat", autoTransfer).setCriteria(partyChatCriteria);
register("chat", autoWarp).setCriteria(partyChatCriteria);
register("chat", shaftAnnouncement).setCriteria(shaftAnnouncementCriteria);
register("chat", scrapNotif).setCriteria(scrapNotifCriteria);

export default true;
