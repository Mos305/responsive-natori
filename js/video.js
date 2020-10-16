// YTPlayer
$(function() {
    $(".player").YTPlayer();
});

// Audio
function randbetween(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

$(function() {
    var button = document.getElementById('aiduchi'),
        audioArr = [
            'audio/funfun01.wav',
            'audio/funfun02.wav',
            'audio/funfun03.wav',
            'audio/funfun04.wav',
            'audio/funfun05.wav',
            'audio/funfun06.wav',
            'audio/funfun07.wav',
            'audio/funfun08.wav',
            'audio/funfun09.wav',
            'audio/funfun10.wav',
            'audio/funfun11.wav',
            'audio/funfun12.wav',
            'audio/funfun13.wav',
            'audio/funfun14.wav',
            'audio/funfun15.wav',
            'audio/funfun16.wav',
            'audio/funfun17.wav',
            'audio/funfun18.wav',
            'audio/funfun19.wav',
        ];

    var playAudio = function() {
        var audio = new Audio();
        audio.src = audioArr[randbetween(1, audioArr.length)];

        audio.play();
    }
    button.addEventListener('click', function() {
        playAudio();
    }, false);
});

$(function() {
    var button = document.getElementById('hagemashi'),
        audioArr = [
            'audio/hage01.wav',
            'audio/hage02.wav',
            'audio/hage03.wav',
            'audio/hage04.wav',
            'audio/hage05.wav',
            'audio/hage06.wav',
            'audio/hage07.wav',
            'audio/hage08.wav',
        ];

    var playAudio = function() {
        var audio = new Audio();
        audio.src = audioArr[randbetween(1, audioArr.length)];

        audio.play();
    }

    button.addEventListener('click', function() {
        playAudio();
    }, false);
});

$(function() {
    var button = document.getElementById('nonoshiri'),
        audioArr = [
            'audio/nono01.wav',
            'audio/nono02.wav',
            'audio/nono03.wav',
            'audio/nono04.wav',
            'audio/nono05.wav',
        ];

    var playAudio = function() {
        var audio = new Audio();
        audio.src = audioArr[randbetween(1, audioArr.length)];

        audio.play();
    }

    button.addEventListener('click', function() {
        playAudio();
    }, false);

});