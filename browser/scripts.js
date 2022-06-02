const button = document.querySelector('.js-button');
const wrapper = document.querySelector('.js-wrapper');
const wrapperDarkClassName = 'page-wrapper_dark';
const wrapperTheme = localStorage.getItem('wrapper');

let setTheme = (theme) => {
    theme == 'dark'
    ? wrapper.classList.add(wrapperDarkClassName)
    : wrapper.classList.remove(wrapperDarkClassName)
}

setTheme(wrapperTheme);

window.onstorage = (e) => {
    currentTheme = e.newValue;
    setTheme(currentTheme);
}

button.addEventListener('click', () => {
    if (wrapper.classList.contains(wrapperDarkClassName)) {
        wrapper.classList.remove(wrapperDarkClassName);
        localStorage.setItem('wrapper', 'light')
    } else {
        wrapper.classList.add(wrapperDarkClassName)
        localStorage.setItem('wrapper', 'dark')
    }
})