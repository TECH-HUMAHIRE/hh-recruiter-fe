const convertEmployeType = (type) => {
    switch (type) {
        case 'fulltime':
            return 'Full Time';
        case 'freelance':
            return 'Freelance';
        default:
            return 'Part Time';
    }
};
export default convertEmployeType;
