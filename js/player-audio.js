(function (window, document, $, undefined) {
    'use strict';

    var playerAudio = (function () {

        var $private = {};
        var $public = {};

        $public.audioInit = function() {
            $( window ).on("load", function() {
                $('.audio-player').each(function(){
                    var $audio = $(this).find('audio');
                    var $audioId = '#' + $audio.attr('id');
                    var $plyr = new Plyr($audioId);
                });
            });              
        };
        return $public;
    })();

    // Global
    window.playerAudio = playerAudio;
    playerAudio.audioInit();
})(window, document, jQuery);

