export const determineFontSize = (
  fontSize,
  SMALL_FONT_SIZE,
  MEDIUM_FONT_SIZE,
  LARGE_FONT_SIZE
) => {
  if (fontSize === "sm") {
    return SMALL_FONT_SIZE;
  } else if (fontSize === "md") {
    return MEDIUM_FONT_SIZE;
  } else {
    return LARGE_FONT_SIZE;
  }
};
