var a = document.querySelectorAll('.slider .slider-block');
var i = 0;

function next() {
    a[i].style.display = 'none';
    i++;

    if (i >= a.length) {
        i = 0;
    }

    a[i].style.display = 'flex';
}

function back() {
    a[i].style.display = 'none';
    i--;

    if (i < 0) {
        i = a.length - 1;
    }

    a[i].style.display = 'flex';
}
