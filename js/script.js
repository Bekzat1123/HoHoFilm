var swiperHome;
($(".footer__arrow").on("click", (function () {
    var i = $(this).attr("href"), a = $(i).offset().top - 132;
    return jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: a}, 600), !1
})), $(".header__burger").length > 0 && ($(".header__burger").on("click", (function () {
    $("body").toggleClass("lock"), $(".header__mobile").toggleClass("active")
})), $(".header__closed").on("click", (function () {
    $("body").removeClass("lock"), $(".header__mobile").removeClass("active")
}))), $("[data-installation]").on("click", (function (i) {
    $(".installation-centers__tab").removeClass("active"), $(".installation-centers__block").removeClass("active"), $(this).addClass("active");
    var a = $(this).data("installation");
    $('[data-installation-block="' + a + '"]').addClass("active")
})), $(".main-body-protection__top").length > 0 && ($(".main-body-protection__top").on("click", (function () {
    $(this).parent().toggleClass("active"), $(this).parent().hasClass("active") ? $(this).next().slideDown() : ($(".main-body-protection__text").slideUp(), $(".main-body-protection__item").removeClass("active"))
})), $((function (i) {
    i(document).mouseup((function (a) {
        var e = i(".main-body-protection__item.active");
        e.is(a.target) || 0 !== e.has(a.target).length || e.removeClass("active")
    }))
})), $((function (i) {
    i(document).mouseup((function (a) {
        var e = i(".main-body-protection__text");
        e.is(a.target) || 0 !== e.has(a.target).length || e.slideUp()
    }))
}))), $("[data-info]").on("click", (function (i) {
    $(".main-info__tab").removeClass("active"), $(".main-info__box").removeClass("active"), $(this).addClass("active");
    var a = $(this).data("info");
    $('[data-info-block="' + a + '"]').addClass("active")
})), $(".main-info__article-btn").on("click", (function (i) {
    i.preventDefault(), $(this).toggleClass("active"), $(".main-info__article-box").toggleClass("active")
})), $(window).width() < "760" && $(".main-info__top").length > 0 && ($(".main-info__top").on("click", (function () {
    $(this).parent().toggleClass("active"), $(this).parent().hasClass("active") ? ($(".video__slick").slick("setPosition"), $(".reviews__slick").slick("setPosition"), $(this).next().slideDown()) : ($(".main-info__block").slideUp(), $(".main-info__box").removeClass("active"))
})), $((function (i) {
    i(document).mouseup((function (a) {
        var e = i(".main-info__box.active");
        e.is(a.target) || 0 !== e.has(a.target).length || e.removeClass("active")
    }))
})), $((function (i) {
    i(document).mouseup((function (a) {
        var e = i(".main-info__block");
        e.is(a.target) || 0 !== e.has(a.target).length || e.slideUp()
    }))
}))), $(window).width() <= "1010") && (swiperHome = $(".main-services__row")).each((function () {
    new Swiper(this, {
        slidesPerView: 1.4,
        spaceBetween: 10,
        slidesPerGroup: 1,
        loop: !0,
        speed: 1e3,
        iOSEdgeSwipeDetection: !0,
        initialSlide: 0,
        pagination: {
            el: ".swiper-pagination", clickable: !0, renderBullet: function (i, a) {
                return '<span class="' + a + '">' + (i + 1) + "</span>"
            }
        },
        breakpoints: {
            100: {slidesPerView: 1.25, spaceBetween: 10, slidesPerGroup: 1},
            600: {slidesPerView: 2, slidesPerGroup: 1, spaceBetween: 20, initialSlide: 0},
            760: {slidesPerView: 3.2, slidesPerGroup: 1, initialSlide: 0}
        }
    })
}));
// $(window).width() <= "1010" && (swiperHome = $(".main-work__row")).each((function () {
//     new Swiper(this, {
//         slidesPerView: 1.4,
//         spaceBetween: 10,
//         slidesPerGroup: 1,
//         loop: !1,
//         speed: 1e3,
//         iOSEdgeSwipeDetection: !0,
//         initialSlide: 0,
//         pagination: {
//             el: ".swiper-pagination", clickable: !0, renderBullet: function (i, a) {
//                 return '<span class="' + a + '">' + (i + 1) + "</span>"
//             }
//         },
//         breakpoints: {
//             100: {slidesPerView: 1.25, spaceBetween: 10, slidesPerGroup: 1},
//             760: {slidesPerView: 1.4, spaceBetween: 10, slidesPerGroup: 1}
//         }
//     })
// }));


// if ($(".product--js").on("click", (function (i) {
//     i.preventDefault(), $.fancybox.open({loop: !1, src: "#product-modal", baseClass: "modal-fancybox", touch: !1})
// })), $(".phone-mask").mask("+ (999)999-99-99"), $(".tilt").length > 0 && $(window).width() >= "1010") {
//     var elements = document.querySelectorAll(".tilt");
//     VanillaTilt.init(elements)
// }
// if ($("[data-product-info]").on("click", (function (i) {
//     $(".product-info__tab").removeClass("active"), $(".product-info__block, .product-info__advt").removeClass("active"), $(this).addClass("active");
//     var a = $(this).data("product-info");
//     $('[data-product-info-block="' + a + '"]').addClass("active")
// })), $(".promo__arrow").on("click", (function () {
//     var i = $(this).attr("href"), a = $(i).offset().top - 100;
//     return jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: a}, 600), !1
// })), $(".reviews").length > 0 && ($(".reviews__slick").slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     arrows: !1,
//     dots: !0,
//     infinite: !0,
//     speed: 1e3,
//     responsive: [{breakpoint: 1010, settings: {slidesToShow: 2, slidesToScroll: 1}}, {
//         breakpoint: 760,
//         settings: {slidesToShow: 1, slidesToScroll: 1}
//     }]
// }), $(".reviews__arrow.reviews__arrow_prev").on("click", (function (i) {
//     $(this).parents(".reviews").find(".reviews__slick").slick("slickPrev")
// })), $(".reviews__arrow.reviews__arrow_next").on("click", (function (i) {
//     $(this).parents(".reviews").find(".reviews__slick").slick("slickNext")
// }))), $(".select").on("click", (function (i) {
//     $(this).hasClass("disabled") || ($(".select").not(this).removeClass("active").find(".select-options").slideUp(50), $(this).toggleClass("active"), $(this).find(".select-options").slideToggle(50))
// })), $(".select-options__value").click((function () {
//     $(this).parents(".select").find(".select-title__value").html($(this).html()), "" != $.trim($(this).data("value")) ? $(this).parents(".select").find("input").val($(this).data("value")) : $(this).parents(".select").find("input").val($(this).html())
// })), $(document).on("click", (function (i) {
//     $(i.target).is(".select *") || ($(".select").removeClass("active"), $(".select-options").slideUp(50))
// })), $(window).width() < "1010" && $(".sidebar").length > 0 && ($(".sidebar__caption").on("click", (function () {
//     $(this).parent().toggleClass("active"), $(this).parent().hasClass("active") ? $(this).next().slideDown() : ($(".sidebar__menu").slideUp(), $(".sidebar__box").removeClass("active"))
// })), $((function (i) {
//     i(document).mouseup((function (a) {
//         var e = i(".sidebar__box.active");
//         e.is(a.target) || 0 !== e.has(a.target).length || e.removeClass("active")
//     }))
// })), $((function (i) {
//     i(document).mouseup((function (a) {
//         var e = i(".sidebar__menu");
//         e.is(a.target) || 0 !== e.has(a.target).length || e.slideUp()
//     }))
// }))), $(".video").length > 0 && $(".video__slick").slick({
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     arrows: !1,
//     dots: !0,
//     infinite: !0,
//     speed: 1e3,
//     responsive: [{breakpoint: 760, settings: {slidesToShow: 1, slidesToScroll: 1}}]
// }), $(".video__play").fancybox({backFocus: !1}), $("#where-buy").length > 0) var containerID = "#where-buy",
//     scrollbar = Scrollbar.init(document.querySelector(containerID), {damping: .1, alwaysShowTracks: !0});
// $(".where-buy__select").length > 0 && $(".where-buy").on("click", ".where-buy__select", (function () {
//     $(".where-buy__colors").hasClass("toning") ? ($(".where-buy__colors").removeClass("toning"),
//     $(".where-buy__colors").addClass("antigravel"),
//     $(".where-buy__block_toning, .where-buy__map-block_toning").removeClass("active"),
//     $(".where-buy__block_antigravel, .where-buy__map-block_antigravel").addClass("active"),
//     $(".option-1").removeClass("active"),
//     $(".option-2").addClass("active")) : ($(".where-buy__colors").addClass("toning"),
//     $(".where-buy__colors").removeClass("antigravel"),
//     $(".where-buy__block_antigravel, .where-buy__map-block_antigravel").removeClass("active"),
//     $(".where-buy__block_toning, .where-buy__map-block_toning").addClass("active"),
//     $(".option-1").addClass("active"),
//     $(".option-2").removeClass("active"))
// }));

// jQuery(document).ready(function($){
//     $(".article__carousel-img").slick({
//         slidesToShow: 6,
//         slidesToScroll: 2,
//         arrows: !0,
//         dots: !1,
//         infinite: !0,
//         speed: 1e3,
//         prevArrow:"<div class='slick-prev'><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"12\" viewBox=\"0 0 18 12\" fill=\"none\"><path d=\"M0.470127 5.46967C0.177235 5.76256 0.177235 6.23744 0.470127 6.53033L5.2431 11.3033C5.53599 11.5962 6.01087 11.5962 6.30376 11.3033C6.59665 11.0104 6.59665 10.5355 6.30376 10.2426L2.06112 6L6.30376 1.75736C6.59665 1.46447 6.59665 0.989593 6.30376 0.6967C6.01086 0.403807 5.53599 0.403807 5.2431 0.6967L0.470127 5.46967ZM17.1191 5.25L1.00046 5.25L1.00046 6.75L17.1191 6.75L17.1191 5.25Z\" fill=\"black\"/></svg></div>",
//         nextArrow:"<div class='slick-next'><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"17\" height=\"12\" viewBox=\"0 0 17 12\" fill=\"none\"><path d=\"M16.649 6.53033C16.9419 6.23744 16.9419 5.76256 16.649 5.46967L11.876 0.696699C11.5831 0.403806 11.1083 0.403806 10.8154 0.696699C10.5225 0.989593 10.5225 1.46447 10.8154 1.75736L15.058 6L10.8154 10.2426C10.5225 10.5355 10.5225 11.0104 10.8154 11.3033C11.1083 11.5962 11.5831 11.5962 11.876 11.3033L16.649 6.53033ZM-4.84567e-10 6.75L16.1187 6.75L16.1187 5.25L4.84567e-10 5.25L-4.84567e-10 6.75Z\" fill=\"black\"/></svg></div>",
//         responsive: [
//             {
//                 breakpoint: 1010, settings: {
//                     slidesToShow: 5
//                 }
//             },
//             {
//                 breakpoint: 760, settings: {
//                     slidesToShow: 4
//                 }
//             },
//             {
//                 breakpoint: 650, settings: {
//                     slidesToShow: 3
//                 }
//             },
//             {
//                 breakpoint: 550, settings: {
//                     slidesToShow: 2
//                 }
//             }
//         ]
//     });

//     $(".about__img").slick({
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         arrows: !0,
//         dots: !1,
//         infinite: !0,
//         speed: 1e3,
//         prevArrow:"<div class='slick-prev'></div>",
//         nextArrow:"<div class='slick-next'></div>"
//     });

//     //fancybox
//     $(".fancybox").fancybox({
//         openEffect: "fade",
//         padding: 0,
//         margin: 0
//     });

//     // Price accordion
//     if ($(".sidebar__menu-level1").length > 0){
//         $('.sidebar__menu-level1 > li > a .sidebar__menu-str').on("click", function(e){
//             e.preventDefault();
//             $(this).parent().parent().toggleClass('active');
//             $(this).parent().next(".sidebar__menu-level2").slideToggle();
//             //$(this).parent().toggleClass("active");
//         });
//         /*$(function ($) {
//             $(document).mouseup(function (e) {
//                 var div = $(".sidebar__menu-level1 > li.active");
//                 if (!div.is(e.target) && div.has(e.target).length === 0) {
//                     div.removeClass("active");
//                 }
//             });
//         });
//         $(function ($) {
//             $(document).mouseup(function (e) {
//                 var div = $(".sidebar__menu-level2");
//                 if (!div.is(e.target) && div.has(e.target).length === 0) {
//                     div.slideUp();
//                 }
//             });
//         });*/
//     }

//     //scroll id
//     $(".scroll--js").click(function(event){
//         event.preventDefault();
//         var full_url = this.href;

//         var parts = full_url.split("#");
//         var trgt = parts[1];

//         var target_offset = $("#"+trgt).offset();

//         $('html, body').animate({scrollTop:target_offset.top}, 1000);
//     });

//     //wrap editor
//     $('.become-dealer__text table, .article__text table').wrap('<div class="content-table-wrap"></div>');

//     $(".main-info__top").click(function () {
//         $(".reviews__slick").slick('reinit');
//     });

//     //select
//     setTimeout(function() {
//         $('select:not(.select-script)').styler();
//     }, 100);


//     function Not_Found()
//     {
//         var $not_found = '';
//         return $not_found;
//     }
//     var $select_sity = $(".select-script");
//     $select_sity.select2({
//         escapeMarkup: function (markup) { return markup; },
//         language: {
//             noResults: function () {
//                  return '<li class="select2-results__option select2-results__option--selectable no-result--js" >Екатеринбург</li>';
//             }
//         }
//     });

//     $('body').on("click", ".no-result--js",function () {
//         $select_sity.val($('.select-script option[data-id-select="70"]').val()).change();
//         $select_sity.select2('close');
//     });

//     /*if ($("#where-buy").length > 0) {
//         const containerID = '#where-buy';
//         const scrollbar = Scrollbar.init(document.querySelector(containerID), {
//             damping: 0.1,
//             alwaysShowTracks: true
//         });
//     }*/

// 	if ($(".promo__slick").length > 0) {
// 		$('.promo__slick').slick({
// 			slidesToShow: 1,
// 			slidesToScroll: 1,
// 			arrows: false,
// 			dots: false,
// 			infinite: true,
// 			speed: 1000,
// 			fade: true,
// 			autoplay: true,
// 			autoplaySpeed: 4000,
// 		});

//         $('.promo__slick').on('beforeChange', function(event, slick, currentSlide, nextSlide){
//             if(nextSlide == 0){
//                 $('.promo__title').text('LLumar® Valor Paint Protection Film');
//                 $('.promo__subtitle').text('Новая защитная пленка премиум-класса от LLumar');
//             } else {
//                 $('.promo__title').text('LLUMAR — ЗАЩИТНАЯ ПЛЕНКА №1 В РОССИИ');
//                 $('.promo__subtitle').text('Официальный дистрибьютор защитных плёнок премиум-класса LLumar из США');
//             }
//           console.log(nextSlide);
//         });
// 	}


// });

// "use strict";