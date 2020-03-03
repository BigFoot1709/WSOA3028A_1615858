console.log('hello');

const dark_btn = document.getElementById("dark_mode_btn");

function bgChange() {
    document.body.style.backgroundColor = '#5062ad';
}

dark_btn.addEventListener('click', bgChange);