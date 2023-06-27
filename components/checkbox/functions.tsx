export const determineSize = (size, SMALL_SIZE, MEDIUM_SIZE, LARGE_SIZE) => {
  if (size === "sm") {
    return SMALL_SIZE;
  } else if (size === "md") {
    return MEDIUM_SIZE;
  } else {
    return LARGE_SIZE;
  }
};
