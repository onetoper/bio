console.log('initializing');

var spinner = document.getElementById('hakunamatata');

function spinning() {
    spinner.animate([
        { transform: 'rotate(0deg)' },
        { transform: 'rotate(360deg)' }
    ], {
        duration: 5000,
        iterations: Infinity,
        easing: 'linear'
    });
}

