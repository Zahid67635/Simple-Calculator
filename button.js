let screen = document.getElementById('diss');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        if (buttonText == 'Clear') {
            screenValue = "";
            screen.innerText = screenValue;
        }
        else if (buttonText == '=') {
            screen.innerText = eval(screenValue);
        } else {
            screenValue += buttonText;
            screen.innerText = screenValue;
        }
    })
}

