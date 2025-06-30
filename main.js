let count = 0;

function increase() {
    count++;
    document.getElementById('counter1').innerText = count;
}

function decrease() {
    count--;
    document.getElementById('counter1').innerText = count;
}

function reset() {
    count = 0;
    document.getElementById('counter1').innerText = count;
}
