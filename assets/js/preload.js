console.log('Hi from preload');

window.addEventListener('load', () => {
    const preloader = document.querySelector('preload');
    preload.classList.add('preload-finish');
})