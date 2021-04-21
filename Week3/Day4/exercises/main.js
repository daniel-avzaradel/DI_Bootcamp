const countdown = document.getElementById('countdown');

let count = 10;

let countDown = function() {

    countdown.textContent = count;
    if (count == 0) {
        clearInterval(int)
    }
    count--

}

let int = setInterval(countDown, 500);