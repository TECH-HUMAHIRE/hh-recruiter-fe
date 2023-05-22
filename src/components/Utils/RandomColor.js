const randomColor = (id) => {
    const randomColourOne = '#50a1d8'.replace(/0/g, function () {
        return (~~(id * 16)).toString(16);
    });
    console.log(id);
    var colors = [randomColourOne];
    var random_color = colors[Math.floor(Math.random() * colors.length)];
    return random_color.length < 5 ? random_color + 'a' : random_color;
};
export default randomColor;
