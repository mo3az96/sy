$(window).on('load', function () {
    $('.pre-loader').fadeOut("500", function () {
        $('body').removeClass("overflow");
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
    /////////////////////
    ///////////////Sliders//////////////////
    var featuredswiper = new Swiper('.featured-slider .swiper-container', {
        slidesPerView: 1,
        effect: 'fade',

        // loop: true,
        pagination: {
            el: '.featured-slider .swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '"> 0' + (index + 1) + '</span>';
            },
        },
        breakpoints: {
            700: {
                slidesPerView: 1,
            },
        },
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
            0: {
                slidesPerView: 1,
            },
            500: {
                slidesPerView: 2,
            },
            900: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
            1500: {
                slidesPerView: 5,
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
            0: {
                slidesPerView: 1,
            },
            500: {
                slidesPerView: 2,
            },
            900: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
            1500: {
                slidesPerView: 5,
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
            0: {
                slidesPerView: 1,
            },
            500: {
                slidesPerView: 2,
            },
            900: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
            1500: {
                slidesPerView: 5,
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
            0: {
                slidesPerView: 1,
            },
            500: {
                slidesPerView: 2,
            },
            900: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
            1500: {
                slidesPerView: 5,
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
            0: {
                slidesPerView: 1,
            },
            500: {
                slidesPerView: 2,
            },
            900: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
            1500: {
                slidesPerView: 5,
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
            0: {
                slidesPerView: 1,
            },
            500: {
                slidesPerView: 2,
            },
            900: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
            1500: {
                slidesPerView: 5,
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
            0: {
                slidesPerView: 1,
            },
            500: {
                slidesPerView: 2,
            },
            900: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
            1500: {
                slidesPerView: 5,
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
            0: {
                slidesPerView: 1,
            },
            500: {
                slidesPerView: 2,
            },
            900: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
            1500: {
                slidesPerView: 5,
            }
        },
    });

    /////////////////////////////
    if ($(window).width() <= 767) {
        $(".nav-foot-header").addClass("mo-accordion");
        $(".nav-foot").addClass("mo-panel");

        $(".featured-slider .cont").unwrap()
        $(".featured-slider .featured").unwrap()
        $(".featured-slider .featured").wrap("<div class='swiper-slide'></div>")
        ///////////////Sliders//////////////////
        var featuredswiper = new Swiper('.featured-slider .swiper-container', {
            slidesPerView: 1,
            effect: 'fade',
            // loop: true,
            pagination: {
                el: '.featured-slider .swiper-pagination',
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '"> 0' + (index + 1) + '</span>';
                },
            },
        });
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

    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 15,
        slidesPerView: 9,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        direction: 'vertical',
        centeredSlides: true,
        breakpoints: {
            0: {
                slidesPerView: 4,
                direction: 'horizontal',
                centeredSlides: false,
            },
            768: {
                slidesPerView: 8,
                direction: 'horizontal',
                centeredSlides: false,
            },
            900: {
                slidesPerView: 6,
            },
            1200: {
                slidesPerView: 7,
            },
            1450: {
                slidesPerView: 8,
            },
            1800: {
                slidesPerView: 9,
            },
        },
    });

    /////////////single
    var galleryTop = new Swiper('.gallery-top', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        navigation: {
            nextEl: '.gallery-top .swiper-button-next',
            prevEl: '.gallery-top .swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbs
        },
    });

});

