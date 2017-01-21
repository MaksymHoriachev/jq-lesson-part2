var menuBtn = $('#header-btn-menu');
var menuLeft = $('#sandwich-menu-side');
var bodyLeft = $('body');

menuBtn.on('click', function () {
    $(this).toggleClass('active-menu');
    menuLeft.toggleClass('sandwich-menu-open');
    bodyLeft.toggleClass('sandwich-menu-push-toleft');
});
