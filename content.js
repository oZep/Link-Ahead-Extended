const linkText = document.querySelectorAll('a');
linkText.forEach((link) => {
    // call api on link
    x = fetch(`http://localhost:3000/api?url=${link.href}`)
    if (x == false) {
        link.style.backgroundColor = 'red';
    } else {
        link.style.backgroundColor = 'green';
    }

});