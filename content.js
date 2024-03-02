const linkText = document.querySelectorAll('a');
linkText.forEach((link) => {
    // call api on link
    var sketch_factor = link.href.length / 100;
    if (sketch_factor >= 0.5) {
        var red = 255 * sketch_factor
        link.style.backgroundColor = 'rgb(${red}, 0, 0)';
        link.style.border = '3px solid rgb(${red}, 0, 0)';
        console.log('red');
    } else {
        var green = 255 * (1 - sketch_factor)
        link.style.backgroundColor = 'rgb(0, ${green}, 0)';  
        link.style.border = '3px solid rgb(0, ${green}, 0)';
    }

});