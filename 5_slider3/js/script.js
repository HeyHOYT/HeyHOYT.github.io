window.onload = function() {
    var btn_prev = document.querySelector('.gallery .buttons .prev');
    var btn_next = document.querySelector('.gallery .buttons .next');
    var i = 0;
    var images = document.querySelectorAll('.gallery .photos img');
    var images2 = document.querySelectorAll('.gallery-2 .photos img');

    function Class(images, i) {
        this.images = images;
        btn_prev.onclick = function() {
            this.images[i].classList.remove('showed');
            i--;

            if (i < 0) {
                i = this.images.length - 1;
            }

            this.images[i].classList.add('showed');
        }

        btn_next.onclick = function() {
            this.images[i].classList.remove('showed');
            i++;

            if (i >= this.images.length) {
                i = 0;
            }

            this.images[i].classList.add('showed');
        }
    }
    var workPls = new Class(images, i, btn_prev, btn_next);

}
