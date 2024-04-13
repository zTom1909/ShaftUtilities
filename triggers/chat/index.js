import { autoTransferFunction, autoTransferCriteria } from "./autoTransfer";
import {
  shaftAnnouncementFunction,
  shaftAnnouncementCriteria,
} from "./shaftAnnouncement";
import { scrapNotifFunction, scrapNotifCriteria } from "./scrapNotif";

register("chat", autoTransferFunction).setCriteria(autoTransferCriteria);
register("chat", shaftAnnouncementFunction).setCriteria(
  shaftAnnouncementCriteria
);
register("chat", scrapNotifFunction).setCriteria(scrapNotifCriteria);

export default true;
