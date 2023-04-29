$(document).ready(function(){
        //풀 메뉴 스크립트
        $(".move-btn").click(function (event) {
            $(this).toggleClass("active");
            $("body").toggleClass("active");
            $(".fullmenu-open").toggleClass("active");
            $(".search-open").removeClass("active");
            $(".search").removeClass("active");
            $('body').on('scroll touchmove mousewheel', e => {
                $('body').scrollTop(0);
            });
        });

        $(".dep_01").on('mouseenter mouseleave', function () {
            $(this).toggleClass("on");
            $(this).find(".dep_02").toggleClass("on");
        });
        
        $(".drow_dep-1").click(function (event) {
            $(this).toggleClass("active");
            $(this).siblings().removeClass("active");
        });

        $(".dep-1").click(function (event) {
            $(this).toggleClass("active");
            $(this).siblings().removeClass("active");
        });

        $(".search").click(function (event) {
            $(this).toggleClass("active");
            $(".search-open").toggleClass("active");
        });
});


$(document).ready(function () {
    var swiper = new Swiper(".pc", {
        slidesPerView: 1,
        centeredSlides: true,    //센터모드
        speed : 1000,
        // effect: 'fade',
        // fadeEffect: {
        //     crossFade: true
        // },
        autoplay: {     //자동슬라이드 (false-비활성화)
            delay: 5000, // 시간 설정
            disableOnInteraction: false, // false-스와이프 후 자동 재생
        },
        loop: true,   // 슬라이드 반복 여부
        loopAdditionalSlides: 1,
        pagination: {
            el: ".main-swiper-pagination-fraction",
            type: "fraction",
            formatFractionCurrent: function (number) {
                return ('0' + number).slice(-2);
            },
            formatFractionTotal: function (number) {
                return ('0' + number).slice(-2);
            },
            renderFraction: function (currentClass, totalClass) {
                return '<span class="' + currentClass + '"></span>' +
                    ' / ' +
                    '<span class="' + totalClass + '"></span>';
            }
        },
    });

    var swiper = new Swiper(".moblie", {
        slidesPerView: 1,
        centeredSlides: true,    //센터모드
        effect: 'fade',
        speed : 1000,
        fadeEffect: {
            crossFade: true
        },
        // autoplay: {     //자동슬라이드 (false-비활성화)
        //     delay: 5000, // 시간 설정
        //     disableOnInteraction: false, // false-스와이프 후 자동 재생
        // },
        loop: true,   // 슬라이드 반복 여부
        loopAdditionalSlides: 1,
        pagination: {
            el: ".main-swiper-pagination-fraction",
            type: "fraction",
            formatFractionCurrent: function (number) {
                return ('0' + number).slice(-2);
            },
            formatFractionTotal: function (number) {
                return ('0' + number).slice(-2);
            },
            renderFraction: function (currentClass, totalClass) {
                return '<span class="' + currentClass + '"></span>' +
                    ' / ' +
                    '<span class="' + totalClass + '"></span>';
            }
        },
    });
});

$(document).ready(function () {
    var swiper = new Swiper(".digital", {
        slidesPerView: 4,
        spaceBetween: 10,
        navigation: {   // 버튼
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            375:{
                slidesPerView: 1,
            },
            380: {
                slidesPerView: 1,
            },
            820:{
                slidesPerView: 2,
            },
            1024:{
                slidesPerView: 3,
            },
            1025: {
                slidesPerView: 4,
            },
        },
    });
});

$(document).ready(function () {
    var galleryThumbs = new Swiper(".education", {
        slidesPerView: 1,
        navigation: {   // 버튼
            nextEl: ".education-swiper-button-next",
            prevEl: ".education-swiper-button-prev",
        },
    });
    
    var galleryTop = new Swiper(".education-slide", {
        slidesPerView: 1,
        pagination: {
            el: ".mobile-swiper-pagination-fraction",
            type: "fraction",
            formatFractionCurrent: function (number) {
                return ('0' + number).slice(-2);
            },
            formatFractionTotal: function (number) {
                return ('0' + number).slice(-2);
            },
            renderFraction: function (currentClass, totalClass) {
                return '<span class="' + currentClass + '"></span>' +
                    ' / ' +
                    '<span class="' + totalClass + '"></span>';
            }
        },
    });
    
    galleryTop.controller.control = galleryThumbs;
    galleryThumbs.controller.control = galleryTop;
});