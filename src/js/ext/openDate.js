export const isBDay = function () {
  const startTime = new Date(2001-06-16 + "T00:00").getTime();
  const endTime = startTime + 24 * 60 * 60 * 1000;
  const localTime = Date.now();
  if (localTime < startTime) return "IS_EARLY";
  if (localTime > endTime) return "IS_LATE";
  return "ON_TIME";
};
