$(window).on('load', function () {
    $('.pre-loader').fadeOut("500", function () {
        $('body').css("overflow", "visible");
        $(this).remove();
    });
});


$(document).ready(function () {
    /////////menu/////////
    $('.mo-menu-btn').click(function () {
        $(this).toggleClass('open');
        $(".mo-navbar").toggleClass('open');
        if ($(window).width() <= 767) {
            $(this).removeClass('open');
            $(".mo-navbar").removeClass('open');

            $("nav").fadeIn(400);
            $(".mo-navbar").addClass("nav-in");
            $("body").addClass("overflow");
        }
    });
    if ($(window).width() <= 767) {
        $('nav').click(function () {
            $("nav").fadeOut(400);
            $(".mo-navbar").removeClass("nav-in");
            $("body").removeClass("overflow");
        });
        $('.mo-navbar').click(function (e) {
            e.stopPropagation();
        });
        $('.close-btn').click(function () {
            $("nav").fadeOut(400);
            $(".mo-navbar").removeClass("nav-in");
            $("body").removeClass("overflow");
        });
    }
    /////////search/////////
    $('.mo-search-icon').click(function () {
        $(this).toggleClass('open');
        $(".serach-form").toggleClass('open');
        if ($(window).width() <= 992) {
            $(this).removeClass('open');
            $(".serach-form").removeClass('open');
            $(".serach-form").fadeIn(300);
            $('.search-input-btn').addClass("open")
            $('body').addClass("overflow");
        }
    });
    if ($(window).width() <= 992) {
        $('.serach-form').click(function () {
            $('.search-input-btn').removeClass("open")
            $(".serach-form").fadeOut(500);
            $('body').removeClass("overflow");
        });
        $('.search-input-btn').click(function (e) {
            e.stopPropagation();
        });
    }
    /////////scroll-btn/////////
    $(".scroll-btn").click(function () {
        $('html, body').animate({
            scrollTop: $("#topBtnRef").offset().top
        }, 1000);
    });
    /////////main slider/////////
    var mainswiper = new Swiper('.main-slider .swiper-container', {
        pagination: {
            el: '.main .swiper-pagination',
            type: 'fraction',
        },
        effect: 'fade',
        navigation: {
            nextEl: '.main-slider .swiper-button-next',
            prevEl: '.main-slider .swiper-button-prev',
        },
        autoplay: false,
        loop: true,
    });
    ///////////////Sliders//////////////////
    var cat1swiper = new Swiper('#cat1 .Product-slider', {
        slidesPerView: 5,
        spaceBetween: 30,
        loop: true,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '#cat1 .swiper-button-next',
            prevEl: '#cat1 .swiper-button-prev',
        },
        pagination: {
            el: '#cat1 .swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            500: {
                slidesPerView: 1,
            },
            900: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
            1500: {
                slidesPerView: 4,
            }
        },
    });
    var cat2swiper = new Swiper('#cat2 .Product-slider', {
        slidesPerView: 5,
        spaceBetween: 30,
        loop: true,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '#cat2 .swiper-button-next',
            prevEl: '#cat2 .swiper-button-prev',
        },
        pagination: {
            el: '#cat2 .swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            500: {
                slidesPerView: 1,
            },
            900: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
            1500: {
                slidesPerView: 4,
            }
        },
    });
    var cat3swiper = new Swiper('#cat3 .Product-slider', {
        slidesPerView: 5,
        spaceBetween: 30,
        loop: true,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '#cat3 .swiper-button-next',
            prevEl: '#cat3 .swiper-button-prev',
        },
        pagination: {
            el: '#cat3 .swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            500: {
                slidesPerView: 1,
            },
            900: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
            1500: {
                slidesPerView: 4,
            }
        },
    });
    var cat4swiper = new Swiper('#cat4 .Product-slider', {
        slidesPerView: 5,
        spaceBetween: 30,
        loop: true,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '#cat4 .swiper-button-next',
            prevEl: '#cat4 .swiper-button-prev',
        },
        pagination: {
            el: '#cat4 .swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            500: {
                slidesPerView: 1,
            },
            900: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
            1500: {
                slidesPerView: 4,
            }
        },
    });
    var cat5swiper = new Swiper('#cat5 .Product-slider', {
        slidesPerView: 5,
        spaceBetween: 30,
        loop: true,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '#cat5 .swiper-button-next',
            prevEl: '#cat5 .swiper-button-prev',
        },
        pagination: {
            el: '#cat5 .swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            500: {
                slidesPerView: 1,
            },
            900: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
            1500: {
                slidesPerView: 4,
            }
        },
    });
    var cat6swiper = new Swiper('#cat6 .Product-slider', {
        slidesPerView: 5,
        spaceBetween: 30,
        loop: true,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '#cat6 .swiper-button-next',
            prevEl: '#cat6 .swiper-button-prev',
        },
        pagination: {
            el: '#cat6 .swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            500: {
                slidesPerView: 1,
            },
            900: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
            1500: {
                slidesPerView: 4,
            }
        },
    });
    var cat7swiper = new Swiper('#cat7 .Product-slider', {
        slidesPerView: 5,
        spaceBetween: 30,
        loop: true,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '#cat7 .swiper-button-next',
            prevEl: '#cat7 .swiper-button-prev',
        },
        pagination: {
            el: '#cat7 .swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            500: {
                slidesPerView: 1,
            },
            900: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
            1500: {
                slidesPerView: 4,
            }
        },
    });
    var bestsellerswiper = new Swiper('.bestseller-slider.Product-slider', {
        slidesPerView: 5,
        spaceBetween: 30,
        loop: true,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '.products-cont .swiper-button-next',
            prevEl: '.products-cont .swiper-button-prev',
        },
        pagination: {
            el: '.products-cont .swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            500: {
                slidesPerView: 1,
            },
            900: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
            1500: {
                slidesPerView: 4,
            }
        },
    });

    /////////////////////////////
    if ($(window).width() <= 767) {
        $(".nav-foot-header").addClass("mo-accordion");
        $(".nav-foot").addClass("mo-panel");
    }
    $('.mo-accordion').click(function () {
        var x = $(this).siblings().prop('scrollHeight') + 12 + "px";
        $(".mo-accordion").not(this).removeClass("active");
        $(this).toggleClass("active");
        if ($(this).siblings().css('max-height') == '0px') {
            $(this).siblings().css('max-height', x);
            $(this).siblings('.nav-foot').css('padding-top', "15px");
        } else {
            $(this).siblings().css('max-height', '0');
            $(this).siblings('.nav-foot').css('padding-top', "0");
        }

        $(".mo-accordion").not(this).siblings().css('max-height', '0');
        $(".mo-accordion").not(this).siblings('.nav-foot').css('padding-top', "0");
    })
});