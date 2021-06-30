(function () {
    "use strict";
    $(document).ready(initialiser);
    var me

    function initialiser(evt) {
        me = $(".mascotte");
        me.click(k0d3);
    }

    function k0d3(evt) {
        me.attr("src", "medias/mascotte.svg");
        setTimeout(function(){
            me.attr("src", "medias/mascotte2.svg");
            setTimeout(function() {
                me.attr("src", "medias/mascotte.svg");
                setTimeout(function() {
                    me.attr("src","medias/mascotte2.svg");
                    setTimeout(function() {
                        me.attr("src","medias/mascotte.svg");
                        setTimeout(function() {
                            me.attr("src","medias/mascotte2.svg");
                            setTimeout(function() {
                                me.attr("src","medias/mascotte.svg");
                                setTimeout(function() {
                                    me.attr("src","medias/mascotte2.svg");
                                    setTimeout(function() {
                                        me.attr("src","medias/mascotte.svg");
                                        setTimeout(function() {
                                            me.attr("src","medias/mascotte2.svg");
                                            setTimeout(function() {
                                                me.attr("src","medias/mascotte.svg");
                                                setTimeout(function() {
                                                    me.attr("src","medias/mascotte2.svg");
                                                    setTimeout(function() {
                                                        me.attr("src","medias/mascotte.svg");
                                                        setTimeout(function() {
                                                            me.attr("src","medias/mascotte2.svg");
                                                            setTimeout(function() {
                                                                me.attr("src","medias/mascotte.svg");
setTimeout(function() {
me.attr("src","medias/mascotte2.svg");
setTimeout(function() {
me.attr("src","medias/mascotte.svg");
}, 225)
}, 500)
                                                            }, 225)
                                                        }, 500)
                                                    }, 225)
                                                }, 500)
                                            }, 225)
                                        }, 500)
                                    }, 500)
                                }, 1500)
                            }, 500)
                        }, 500)
                    }, 500)
                }, 1500)
            }, 225)
        },1000)
    }
}());