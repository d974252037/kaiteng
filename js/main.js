$(document).ready(function () {

    //-- 滾動監聽 --
    let menu_top =$('.menu').offset().top;

    $(window).bind('scroll resize', function() {

        let beforeTop=parseInt($(this).scrollTop());
        if(menu_top<=beforeTop){
            $('.menu').addClass('fixed_menu');
        }
        else{
            $('.menu').removeClass('fixed_menu');
        }
    });

    //-- menu --
    $('.btn_box .hamburger').click(function (e) { 

        var tl = gsap.timeline();

        if($(this).hasClass('is-active')){
            $(this).removeClass('is-active');
            tl.to($('.menu .list_box'), 0.5, {opacity: 0, x:-40});
            tl.to($('.menu .list_box'), 0.1, {visibility:'hidden'}, '<0.5');
            tl.to($('.menu '), 1, { width: '8%'}, '-=0.3');
        }
        else{
            $(this).addClass('is-active');
            
            tl.to($('.menu '), 1, { width: '83%'});
            tl.to($('.menu .list_box'), 0.5, {opacity: 1, x:0, visibility:'visible'}, '<0.4');
        }
    });


    //-- menu拆字 --
    $.each($('.menu .list_box a>span'), function (index, valueOfElement) { 
       let _this=$(this);
       let txt=$(this).html();
       let txt_arr= txt.split(''); 
       $(this).html('');
       $.each(txt_arr, function (index, valueOfElement) { 
         _this.append(`<span class="s_txt">${this}</span>`);
       });
    });

    $('.menu .list_box a').mouseenter(function () { 
        var tl_mu = gsap.timeline();
        tl_mu.addLabel("start");
        $.each($(this).find('.s_txt'), function (index, valueOfElement) { 
            tl_mu.to($(this), 0.4, {y:-20}, '<0.03');
        });
        $.each($(this).find('.s_txt'), function (index, valueOfElement) { 
            let display_num=index==0 ? '<0.2':'<0.03';
            tl_mu.fromTo($(this), 0.4, {y:20},{y:0}, display_num);
        });
        tl_mu.to($(this).find('.a_line'), 0.3, {width: '12%'}, 'start');
    });
    $('.menu .list_box a').mouseleave(function () { 
        var tl_mu = gsap.timeline();
        tl_mu.addLabel("start");
        tl_mu.to($(this).find('.a_line'), 0.3, {width: '0%'}, 'start');
    });
});