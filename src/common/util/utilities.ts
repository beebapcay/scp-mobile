// Get the section from the data
export const getSection = <T>(
  data: T[],
  index: number,
  maxItemPerSection: number
) => {
  const lower = index * maxItemPerSection;
  const upper = Math.min((index + 1) * maxItemPerSection, data.length);
  return data.slice(lower, upper);
};

export const generateTimeSeries = (step: number) => {
  const dt = new Date(1970, 0, 1);
  const rc = [];
  while (dt.getDate() === 1) {
    rc.push(`${dt.getHours()}:${dt.getMinutes()}`);
    dt.setMinutes(dt.getMinutes() + step);
  }
  return rc;
};
