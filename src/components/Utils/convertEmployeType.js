const convertEmployeType = (type) => {
    switch (type) {
        case 'fullTime':
            return 'Full Time';
        case 'freelance':
            return 'Freelance';
        default:
            return 'Part Time';
    }
};
export default convertEmployeType;
