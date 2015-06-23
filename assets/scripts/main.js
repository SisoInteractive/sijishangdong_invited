// Created by sam mok 2015(Siso brand interactive team).

"use strict";

var app = {
    create: function (){
        //  create slider
        app.mySwiper = new Swiper ('.swiper-container', {
            direction: 'vertical',

            noSwiping: false,

            // init
            onInit: function () {
                console.log('Initialized...');
                $('.scene01').addClass('active');
            },

            //  router
            onTransitionEnd: function (swiper) {
                var curIndex = swiper.activeIndex;

                //  show bg
                $('.scene').eq(curIndex).addClass('activeBg')
                    .siblings('.scene').removeClass('activeBg');

                //  show content
                setTimeout(function () {
                    $('.scene').eq(curIndex).addClass('active')
                        .siblings('.scene').removeClass('active');
                }, 250);
            }
        });

        //  first time play BGM
        var initSound = function () {
            //  delay play
            $('#audio')[0].play();

            document.removeEventListener('touchstart', initSound, false);
        };
        document.addEventListener('touchstart', initSound, false);
    },

    start: function (){
        this.create();
    }
};

$(function (){
    // init app
    app.start();
});