$(document).ready(function () {

    let loading_tl=gsap.timeline({delay:0.4});
        loading_tl.to('.loading_div .logo_div img', 0.5, {y: 0});

    setTimeout(() => {
        $('.loading_div').addClass('close');

        //-- top LOGO 動態 --
        let top_tl = gsap.timeline({delay:0.5});
        top_tl.from('.top_logo_div .img_box img', 1, {y:100});
        $.each($('.top_logo_div .share_box a'), function (index, valueOfElement) { 
            top_tl.from($(this).find('img'), 1, {y:50}, '<0.2');
        });

    }, 2000);



    //-- 滾動監聽 --
    let menu_top =$('.menu').offset().top;
    //## 右上角粉專按鈕 ##
    let shear_top =$('.top_logo_div .share_box').offset().top;

    $(window).bind('scroll resize', function() {

        let beforeTop=parseInt($(this).scrollTop());
        if(menu_top<=beforeTop){
            $('.menu').addClass('fixed_menu');
        }
        else{
            $('.menu').removeClass('fixed_menu');
        }

        if(shear_top<=beforeTop){
            $('.top_logo_div .share_box').addClass('fixed_share_box');
        }
        else{
            $('.top_logo_div .share_box').removeClass('fixed_share_box');
        }
    });



    //-- menu --
    $('.btn_box .hamburger').click(function (e) { 

        var tl = gsap.timeline();

        if($(this).hasClass('is-active')){
            $(this).removeClass('is-active');
            tl.to($('.menu .list_box'), 0.5, {opacity: 0, x:-40});
            tl.to($('.menu .list_box'), 0.1, {visibility:'hidden'}, '<0.2');
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

    

    //---------------- Footer 動態 ---------------------
    let footer_tl=gsap.timeline({
        scrollTrigger: {
            trigger: "footer",
            //once:true, // 執行1次
            //pin: true,   // 固定畫面
            start: "top bottom", // 開始位置
            end: "top bottom", // 結束位移距離
            //scrub: 3, // 延遲動態進程(滑順效果)
            //markers:true, // 標註開始，結束位置
        }
    });

    footer_tl.from('footer .logo_item .logo_box img', 1.5, {y:'100%'});

    $.each($('footer .logo_item .item_box a'), function (index, valueOfElement) { 
        footer_tl.from($(this), 1.5, {y:'100%'}, '<0.1');
    });

    $.each($('footer .share_box a'), function (index, valueOfElement) { 
        footer_tl.from($(this), 1.5, {y:'100%'}, '<0.1');
    });
});

// $(window).on('load', function () {
//     $('.loading_div').addClass('close');
// });