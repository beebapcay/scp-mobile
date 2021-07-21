// Get the section from the data
export const getSection = <T>(data: T[], index: number, maxItemPerSection: number) => {
    const lower = index * maxItemPerSection;
    const upper = Math.min((index + 1) * maxItemPerSection, data.length);
    return data.slice(lower, upper);
}
