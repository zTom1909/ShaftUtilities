export const removeUnicode = (string) =>
  typeof string !== "string"
    ? ""
    : string.replace(/[^\u0000-\u007F]/g, "").trim();
