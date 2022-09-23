// Toggle full-screen mode
const fullscreen = (mode = true, elem = 'body') => mode ? document.querySelector(elem).requestFullscreen() : document.exitFullscreen();
