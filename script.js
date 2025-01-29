document.addEventListener("DOMContentLoaded", function () {
    tippy('#tooltipBtn', {
        content: 'Hello, I am a tooltip!',
        placement: 'top',
    });
});
console.log('Script loaded at:', new Date());
alert('Script is working!');
