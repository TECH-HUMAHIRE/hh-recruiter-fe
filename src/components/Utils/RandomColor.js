const randomColor = () => {
    var colors = ['#ff0000', '#00ff00', '#0000ff'];
    var random_color = colors[Math.floor(Math.random() * colors.length)];
    return random_color.length < 5 ? random_color + 'a' : random_color;
};
export default randomColor;
