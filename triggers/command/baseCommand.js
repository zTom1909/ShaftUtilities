import help from "./help";
import settings from "./settings";

export default (...commandArray) => {
  const [command, parameter] = commandArray;
  switch (command) {
    case "help":
      help();
      break;
    case "autotransfer":
      settings(parameter, "Auto transfer");
      break;
    case "shaftannouncement":
      settings(parameter, "Mineshaft announcement");
      break;
    case "scrapnotif":
      settings(parameter, "Scrap notification");
      break;
  }
};
