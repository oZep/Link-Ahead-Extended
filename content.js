const linkText = document.querySelectorAll('a');
linkText.forEach((link) => {
    // call api on link
    sketch_factor = fetch(`http://localhost:3000/api?url=${link.href}`)
    if (x >= 0.5) {
        link.style.backgroundColor = 'red';
    } else {
        link.style.backgroundColor = 'green';
    }

});