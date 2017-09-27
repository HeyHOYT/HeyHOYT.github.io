window.onload = function() {
    var images1 = document.querySelectorAll('.gallery-1 .photos img');
    var slider1 = new Name(images1);
    var images2 = document.querySelectorAll('.gallery-2 .photos img');
    var gallery1_prev = document.querySelector('.gallery-1 .buttons .prev');
    var gallery1_next = document.querySelector('.gallery-1 .buttons .next');
    gallery1_prev.onclick = function() {
        slider1.prev();
    };
    gallery1_next.onclick = function() {
        slider1.next();
    };
    autoslider(images2);

    function autoslider(images) {
        var i = 0;
        setTimeout(function() {
            var images2 = document.querySelectorAll('.gallery-2 .photos img');
            images[i].classList.remove('showed');
            i++;

            if (i >= images.length) {
                i = 0;
            }
            images[i].classList.add('showed');
            autoslider(images2);
        }, 1000);
    }

    function Name(images) {
        this.images = images;
        var i = 0;
        this.next = function() {
            this.images[i].classList.remove('showed');
            i++;

            if (i >= this.images.length) {
                i = 0;
            }

            this.images[i].classList.add('showed');
        }
        this.prev = function() {
            this.images[i].classList.remove('showed');
            i--;

            if (i < 0) {
                i = this.images.length - 1;
            }

            this.images[i].classList.add('showed');
        }
    }


}
