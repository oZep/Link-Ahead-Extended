const linkText = document.querySelectorAll('a');
linkText.forEach((link) => {
    // call api on link
    sketch_factor = fetch(`http://localhost:3000/api?url=${link.href}`)
    if (x >= 0.5) {
        red = 255 * x
        link.style.backgroundColor = 'rbg(${red}, 0, 0)';
    } else {
        green = 255 * (1 - x)
        link.style.backgroundColor = 'rbg(0, 0, ${green})';  
    }

});