export const color = {
    employee: {
        primary: '#F57F17',
        seconday: '#FABF8B',
        disable: '#fff9f3',
        borderColor: '#DEDEDE'
    }
};
export const width = {
    sidebar: 240
};
export const monthName = [
    '',
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
];
let date = new Date();
const years = [...Array(date.getFullYear() + 1)]
    .filter((_, key) => key + 1 > 1000)
    .map((_, key) => {
        return {
            label: key + 1000,
            value: key + 1000
        };
    });
export const yearsList = years.sort(
    (a, b) => parseFloat(b.label) - parseFloat(a.label)
);
