//Custom Scripts


$(document).ready(function() {


    $('.tm-tab-nav li').on('click', function () {
        $('li').removeClass('active-li');
       var clickedID = $(this).attr('data-id');
        $('.tm-tab-content').hide();
        $('#' + clickedID).show();
        $(this).addClass('active-li');
    });

    // setTimeout(function(){
    //     $(".tm-site-loader").fadeOut();
    // }, 400);

    $('.accordion-head').on('click', function () {
        $('.accordion-head').removeClass('active-header');
        $('.tm-tab-content').slideUp();
        $(this).addClass('active-header');
        $(this).next('.tm-tab-content').slideDown();
    });


    if($(window).width() <= 767){
        $('.has-submenu').on('click', function () {
            $('.tm-submenu').slideUp();
            $(this).find('.tm-submenu').slideDown();
        });
    }

    $('.tm-accordion .tm-question').first().addClass('expanded');
    $('.tm-accordion .tm-answer').first().show();
    $('.tm-question').on('click', function () {
        $('.tm-question').removeClass('expanded');
        $('.tm-answer').slideUp();
       $(this).addClass('expanded');
       $(this).next('.tm-answer').slideDown();
    });

    //product carousel
    $('#product-carousel').owlCarousel({
        loop: false,
        margin: 30,
        nav: true,
        dots: false,
        dotsEach: true,
        autoHeight: false,
        autoplay: false,
        autoplayTimeout: 5400,
        autoplayHoverPause: true,
        navText: ["<i class=\"fa fa-chevron-left\"></i>", "<i class=\"fa fa-chevron-right\"></i>"],
        responsive:{
            0:{
                items:1
            },
            700:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });

    //Client carousel
    $('#tm-clients').owlCarousel({
        loop: true,
        margin: 24,
        nav: false,
        dots: false,
        dotsEach: true,
        autoHeight: false,
        autoplay: true,
        autoplayTimeout: 4400,
        autoplayHoverPause: false,
        navText: ["<i class=\"fa fa-chevron-left\"></i>", "<i class=\"fa fa-chevron-right\"></i>"],
        responsive:{
            0:{
                items:2
            },
            700:{
                items:3
            },
            1200:{
                items:5
            }
        }
    });

    //Timeline
    if($('#tm-timelines').length > 0){
        $('#tm-timelines').owlCarousel({
            loop: false,
            margin: 0,
            nav: true,
            dots: false,
            dotsEach: true,
            autoHeight: true,
            autoplay: false,
            autoplayTimeout: 4400,
            autoplayHoverPause: false,
            navText: ["<i class=\"fa fa-chevron-left\"></i>", "<i class=\"fa fa-chevron-right\"></i>"],
            responsive:{
                0:{
                    items:1
                },
                700:{
                    items:2
                },
                1200:{
                    items:3
                }
            }
        });
    }


    //TM product card
    $('.tm-product-card').each(function () {

    });


    //Deposit/transfer animation
    function animateLine(){
        setTimeout( function(){
            $('.line-1').fadeIn().delay(3000).fadeOut();
        }  , 1000 );

        setTimeout( function(){
            $('.line-2').fadeIn().delay(3000).fadeOut();
        }  , 5000 );

        setTimeout( function(){
            $('.line-3').fadeIn().delay(3000).fadeOut();
        }  , 9000 );
        setTimeout( function(){
            $('.line-4').fadeIn().delay(3000).fadeOut();
        }  , 13000 );
        setTimeout( function(){
            $('.line-5').fadeIn().delay(3000).fadeOut();
        }  , 17000 );
        setTimeout( function(){
            $('.line-6').fadeIn().delay(3000).fadeOut();
        }  , 21000 );
        setTimeout( function(){
            $('.line-7').fadeIn().delay(3000).fadeOut();
        }  , 25000 );
        setTimeout( function(){
            $('.line-8').fadeIn().delay(3000).fadeOut();
        }  , 29000 );
        setTimeout( function(){
            $('.line-9').fadeIn().delay(3000).fadeOut();
        }  , 33000 );
        setTimeout( function(){
            $('.line-10').fadeIn().delay(3000).fadeOut();
        }  , 37000 );
    }
    animateLine();
    setTimeout(function () {
        setInterval(function() {
            animateLine();
            $('.cls-1').toggleClass('cls-2');
        }, 39700);
    }, 2000);
    //Ends

    $('.menu-trigger').on('click', function () {
        $('.mobile-nav').fadeIn();
        $('body').css({
            'overflow':'hidden'
        })
    });
    $('.close-menu').on('click', function () {
        $('.mobile-nav').fadeOut();
        $('body').css({
            'overflow':'visible'
        })
    });


    //Home page Chart anim
    function changeLPs() {
        if($('.LP-chart').length > 0){

            setTimeout(function () {
                $('.LP-chart').removeClass('scene-1 scene-3 scene-4');
                $('.LP-chart').addClass('scene-2');
                $('.scene-2 .lp-1 > img').attr('src', '../www.tmgm.com/img/lp1-sn2.png');
                $('.scene-2 .lp-2 > img').attr('src', '../www.tmgm.com/img/lp2-sn2.png');
                $('.scene-2 .lp-3 > img').attr('src', '../www.tmgm.com/img/lp3-sn2.png');
                $('.scene-2 .lp-4 > img').attr('src', '../www.tmgm.com/img/lp4-sn2.png');
                $('.bid-card .bid-change').text('1.10004');
                $('.ask-card .ask-change').text('1.10004');
                $('.pips-card .pip-value').text('0.0');
            }, 1500);

            setTimeout(function () {
                $('.LP-chart').removeClass('scene-2 scene-3 scene-4');
                $('.LP-chart').addClass('scene-1');
                $('.scene-1 .lp-1 > img').attr('src', '../www.tmgm.com/img/lp1.png');
                $('.scene-1 .lp-2 > img').attr('src', '../www.tmgm.com/img/lp2.png');
                $('.scene-1 .lp-3 > img').attr('src', '../www.tmgm.com/img/lp3.png');
                $('.scene-1 .lp-4 > img').attr('src', '../www.tmgm.com/img/lp4.png');
                $('.bid-card .bid-change').text('1.10005');
                $('.ask-card .ask-change').text('1.10006');
                $('.pips-card .pip-value').text('0.1');
            }, 3000);

            setTimeout(function () {
                $('.LP-chart').removeClass('scene-2 scene-1 scene-3');
                $('.LP-chart').addClass('scene-4');
                $('.scene-4 .lp-1 > img').attr('src', '../www.tmgm.com/img/lp1-sn4.png');
                $('.scene-4 .lp-2 > img').attr('src', '../www.tmgm.com/img/lp2-sn4.png');
                $('.scene-4 .lp-3 > img').attr('src', '../www.tmgm.com/img/lp3-sn4.png');
                $('.scene-4 .lp-4 > img').attr('src', '../www.tmgm.com/img/lp4-sn4.png');
                $('.bid-card .bid-change').text('1.10005');
                $('.ask-card .ask-change').text('1.10005');
                $('.pips-card .pip-value').text('0.0');
            }, 4500);

            setTimeout(function () {
                $('.LP-chart').removeClass('scene-2 scene-1 scene-4');
                $('.LP-chart').addClass('scene-3');
                $('.scene-3 .lp-1 > img').attr('src', '../www.tmgm.com/img/lp1-sn3.png');
                $('.scene-3 .lp-2 > img').attr('src', '../www.tmgm.com/img/lp2-sn3.png');
                $('.scene-3 .lp-3 > img').attr('src', '../www.tmgm.com/img/lp3-sn3.png');
                $('.scene-3 .lp-4 > img').attr('src', '../www.tmgm.com/img/lp4-sn3.png');
                $('.bid-card .bid-change').text('1.10003');
                $('.ask-card .ask-change').text('1.10004');
                $('.pips-card .pip-value').text('0.1');
            }, 6000);

        }
    }
    changeLPs();
    setInterval(function () {
        changeLPs();
    }, 6000);

    // if ($('#lpAnimation').length > 0) {
    //     setInterval(function () {
    //         $.ajax({
    //             url: "lp-animation.php", success: function (result) {
    //                 $('#lpAnimation').html(result);
    //             }
    //         });
    //
    //     }, 500);
    // }

    function langAnim() {
        setTimeout(function () {
            $('.lang-en').fadeIn().delay(2000).fadeOut();
        },0);
        setTimeout(function () {
            $('.lang-cn').fadeIn().delay(2000).fadeOut();
        },3000);
        setTimeout(function () {
            $('.lang-es').fadeIn().delay(2000).fadeOut();
        },6000);
        setTimeout(function () {
            $('.lang-me').fadeIn().delay(2000).fadeOut();
        },9000);
    }

    langAnim();
    setInterval(function(){
        langAnim();
    }, 12000);

    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        if(!$(this).hasClass('third-party-link')){
            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
                // Prevent default anchor click behavior
                event.preventDefault();

                // Store hash
                var hash = this.hash;

                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                $('html, body').animate({
                    scrollTop: $(hash).offset().top - 100
                }, 800, function(){

                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                });
            } // End if
        }

    });

    // if($(window).width() <= 1023){
    //     $('.fall-back-vid').attr('src', 'img/fallback.gif');
    // }

    //Simple Quiz

    $('.qtn-sectn').first().show();

    $('.trigger-quiz-result').on('click', function () {
        var ansA = $('input[name=QuestionOne]:checked').val();
        var ansB = $('input[name=QuestionTwo]:checked').val();
        var result = ansA + ansB;
        if(result === 'AA' || result === 'AC' || result === 'BA' || result === 'BC' || result === 'AB'){
            $('.result-value').text('EDGE Account');
            $('.open-account-btn').text('Open EDGE Account');
        } else if (result === 'CA' || result === 'CC'|| result === 'BB' || result === 'CB'){
            $('.result-value').text('Classic Account');
            $('.open-account-btn').text('Open Classic Account');
        } else{
            return false;
        }

        $(this).parents('.qtn-sectn').hide();
        $(this).parents('.qtn-sectn').next('.quiz-result').fadeIn();

    });

    // $('.tm-quiz input[type=radio]').on('change', function() {
    //     $('.tm-btn-wrapper').fadeIn();
    //     $('.quiz-result').hide();
    // });

    $('.btn-next').on('click', function () {
       $(this).parents('.qtn-sectn').hide();
       $(this).parents('.qtn-sectn').next('.qtn-sectn').fadeIn();
    });


    $('.tm-tab-content-wrap .tab-content').first().show();
    $('.nav-item').on('click', function () {
        var clickId = $(this).attr('data-rel');
        $('.nav-item').removeClass('active-nav');
        $('.tab-content').hide();
        $('#' + clickId).fadeIn();
        $(this).addClass('active-nav');
    });


    /////RANGE SLIDER

    function ManagedFund (){
        var managedFund =  parseInt($('#fund-managed').find('.value').attr('data-selected-value'));
        var managementFee =  parseInt($('#slider-mgmtfee').find('.value').attr('data-selected-value')) / 100;
        var profitSharing =  parseInt($('#profit-sharing').find('.value').attr('data-selected-value')) / 100;
        var averageProfit =  parseInt($('#average-profit').find('.value').attr('data-selected-value')) / 100 .toFixed(2);
        var averageProfitPow = Math.pow((averageProfit),12)
        var bracketCalc = managedFund * averageProfitPow * profitSharing;
        var earningResult = (managedFund * managementFee + bracketCalc).toFixed(2);
        $('.earning-result').text(earningResult)
    }
    ManagedFund();

    $('.slider').on('slidestop', function () {
        ManagedFund();
    });

    function LotCalc() {
        var lotStopValue =  parseInt($('#Lots').find('.value').attr('data-selected-value'));
        var lotCommission = 3;
        var earningResult = lotStopValue *  lotCommission
        $('.lot-earning-result').text('$' + earningResult)
    }

    LotCalc();

    $('.slider').on('slidestop', function () {
        LotCalc();
    });


    $('.lang-trigger').on('click', function () {
       $('.tm-language-select-panel').fadeIn();
       $('body').css({'overflow' : 'hidden'});
    });
    $('.close-lang-panel').on('click', function () {
        $('.tm-language-select-panel').fadeOut();
        $('body').css({'overflow' : 'auto'});
    });

    function makeTimer() {

        //		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");
        var endTime = new Date("18 January 2021 8:58:00 GMT+01:00");
        endTime = (Date.parse(endTime) / 1000);

        var now = new Date();
        now = (Date.parse(now) / 1000);

        var timeLeft = endTime - now;

        var days = Math.floor(timeLeft / 86400);
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

        if (hours < "10") { hours = "0" + hours; }
        if (minutes < "10") { minutes = "0" + minutes; }
        if (seconds < "10") { seconds = "0" + seconds; }

        $("#days h4").html(days);
        $("#hours h4").html(hours);
        $("#minutes h4").html(minutes);
        $("#seconds h4").html(seconds);

    }

    setInterval(function() { makeTimer(); }, 1000);

});

$(function() {
    $('.box').mousemove(function(e) {
        var offset = $(this).offset(),
            /*try a random value here*/
            constante = 6,
            x = e.pageX - offset.left,
            y = e.pageY - offset.top,
            rx = (($(this).height()/2) - y) / ($(this).height() /2) * constante,
            ry = ( -1 * (($(this).width()/2) - x)) / ($(this).width()/2) * constante;

        /* $('span.box-info').text('( x, y ) : ( ' + x + ', ' + y + ' )');
         $('span.mouse-info').text('( x, y ) : ( ' + rx + ', ' + ry + ' )');*/

        $(this).css(
            { transform: 'rotateX(' + rx + 'deg)' +' ' + 'rotateY(' + ry + 'deg)'}
        )
    });
    $('.box').mouseleave(function(e) {
        $(this).css({ transform: 'rotateX(' + 0 + 'deg)' +' ' + 'rotateY(' + 0 + 'deg)'});
    });
});



$(window).bind('scroll', function () {
    var windowScroll = $(window).scrollTop();
    if(windowScroll >= 68){
        $('.tm-main-header').addClass('tm-sticky');
        $('.nav-row').fadeOut();
    } else{
        $('.tm-main-header').removeClass('tm-sticky');
        $('.nav-row').fadeIn();
    }
});

$(window).bind('scroll', function () {
    var windowScroll = $(window).scrollTop();
    var getFormoffset = $(".tm-global-sectn").offset().top;
    if(windowScroll >= getFormoffset){
        $('.tm-btn-float').fadeOut();
    } else{
        $('.tm-btn-float').fadeIn();
    }
});
