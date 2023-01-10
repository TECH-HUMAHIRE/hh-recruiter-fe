const colSize = (size) => {
    switch (size) {
        case 12:
            return '100%';
        case 11:
            return '91.66666667%';
        case 10:
            return '83.33333333%';
        case 9:
            return '75%';
        case 8:
            return '66.66666667%';
        case 7:
            return '58.33333333%';
        case 6:
            return '50%';
        case 5:
            return '41.66666667%';
        case 4:
            return '33.33333333%';
        case 3:
            return '25%';
        case 2:
            return '16.66666667%';
        case 1:
            return '8.33333333%';
        default:
            return '100%';
    }
};
export default colSize;
