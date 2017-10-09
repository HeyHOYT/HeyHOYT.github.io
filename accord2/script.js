window.onload = function() {
    var start = document.querySelectorAll('.accordeon-start');
    var img = document.querySelectorAll('.img');
    for (var i = 0; i < start.length; i++) {
        start[i].onclick = function() {
            var fuck = this;
            if (this.classList.contains('active')) {
                this.classList.remove('active');
            } else {
                for (var i = 0; i < img.length; i++) {
                    this.src = 'images/arrow-top.png'
                    console.log(this)
                }
                name();
                this.classList.add('active');
            }
        }
    }

    function name() {
        for (var i = 0; i < start.length; i++) {
            start[i].classList.remove('active');
        }
    }


}
