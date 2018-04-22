$(function () {

    $('.nav-link').click(function () {
        $('html').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1500, 'easeInOutExpo')
    })
    $('.btnSearch').click(function () {
        $('.btnSearch').hide();
        $('.searchShow').show(200);
    })
    $('.btnClose').click(function () {
        $('.btnSearch').show(500);
        $('.searchShow').hide(500);

    })
    $(window).scroll(function(){
        var locationScroll = $(window).scrollTop();
        if (navigator.userAgent.match(/(iPod|iPhone|Android)/)) { 
            //console.log(locationScroll);
            if (locationScroll > 300) {
                $('.categories').addClass('showProduct');
            }
            else if (locationScroll < 300) {
                $('.categories').removeClass('showProduct');
            }
            if (locationScroll > 3500) {
                $('.bannermainbottom').addClass('showbannerMain');
            }
            else if (locationScroll < 3500) {
                $('.bannermainbottom').removeClass('showbannerMain');
            }
            if (locationScroll > 3800) {
                $('.articles').addClass('showArticles');
            }
            else if (locationScroll < 3800) {
                $('.articles').removeClass('showArticles');
            }
            if (locationScroll > 5200) {
                $('.suplliers').addClass('showSuplliers');
            }
            else if (locationScroll < 5200) {
                $('.suplliers').removeClass('showSuplliers');
            }
            if (locationScroll > 5400) {
                $('.foot').addClass('showFoot');
            }
            else if (locationScroll < 5400) {
                $('.foot').removeClass('showFoot');
            }
            if (locationScroll > 200) {
                $('.btnTop').show();
            }
            else if (locationScroll < 200) {
                $('.btnTop').hide();
            }
         }
         else {
            //console.log(locationScroll);
            if (locationScroll > 200) {
                $('.categories').addClass('showProduct');
            }
            else if (locationScroll < 400) {
                $('.categories').removeClass('showProduct');
            }
    
            if (locationScroll > 1000) {
                $('.bannermainbottom').addClass('showbannerMain');
            }
            else if (locationScroll < 1000) {
                $('.bannermainbottom').removeClass('showbannerMain');
            }
    
            if (locationScroll > 1300) {
                $('.articles').addClass('showArticles');
            }
            else if (locationScroll < 1300) {
                $('.articles').removeClass('showArticles');
            }
            if (locationScroll > 1800) {
                $('.suplliers').addClass('showSuplliers');
            }
            else if (locationScroll < 1800) {
                $('.suplliers').removeClass('showSuplliers');
            }
            if (locationScroll > 2000) {
                $('.foot').addClass('showFoot');
            }
            else if (locationScroll < 2000) {
                $('.foot').removeClass('showFoot');
            }
    
            if (locationScroll > 400) {
                $('.btnTop').show();
            }
            else if (locationScroll < 400) {
                $('.btnTop').hide();
            }
         }
    })
    $('.btnTop').click(function () {
        $('html').animate({ scrollTop: 0 }, 500, 'easeInOutExpo')
    })

    var clicks = 0;
    $('.btnHeader').click(function () {
        if (clicks == 0) {
            $('.btnSearch').hide();
            $('.searchShow').hide();
            clicks++;
        } else {
            $('.btnSearch').show();
            clicks--;
        }
    });

})