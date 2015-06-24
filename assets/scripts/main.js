// Created by sam mok 2015(Siso brand interactive team).

"use strict";

var app = {
    create: function (){
        //  create countUp instance for scene05 userId
        var options = {
            useEasing : true,
            useGrouping : true,
            separator : ',',
            decimal : '.',
            prefix : '',
            suffix : ''
        };
        var userIdCountUp = new CountUp("userId", 0, 888018, 0, 2.5, options);

        //  create slider
        app.mySwiper = new Swiper ('.swiper-container', {
            direction: 'vertical',

            noSwiping: false,

            // init
            onInit: function () {
                console.log('Initialized...');
                //  scene 01
                setTimeout(function () {
                    $('.scene01').addClass('active activeTransition');
                }, 500);
            },

            onTransitionStart: function (swiper) {
                if (swiper.previousIndex == 3) {
                    setTimeout(function () {
                        $('.countUp').empty();
                        userIdCountUp.reset();
                        userIdCountUp.start();
                    }, 1000);
                }
            },

            //  router
            onTransitionEnd: function (swiper) {
                var curIndex = swiper.activeIndex;
                //  show content
                $('.scene').eq(curIndex).addClass('active activeTransition');

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