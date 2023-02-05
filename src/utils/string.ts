export const removeTags = (str: string): string => {
  return str.replaceAll("<b>", "").replaceAll("</b>", "");
};
