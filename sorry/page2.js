$('.gak').on('mouseover', function() {
    $(this).css({
        'top': Math.random() * window.innerHeight + "px",
        'left': Math.random() * window.innerWidth + "px"
    });
    })