// disabling transitions on page load
document.body.classList.add('preload');

// re-enabling the transitions after the initial load
window.addEventListener('load', () => {
    document.body.classList.remove('preload');
})