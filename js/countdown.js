
var end = new Date('06/26/2016 12:1 AM');

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementById('countdown').innerHTML = 'MARRIED!';

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        document.getElementById('countdown').innerHTML = days + ' days ';
        if (hours > 0 && hours < 2)
        {
        document.getElementById('countdown').innerHTML += hours + ' hour ';
        }
        else{document.getElementById('countdown').innerHTML += hours + ' hours ';}
        
        document.getElementById('countdown').innerHTML += minutes + ' minutes ';
        
        document.getElementById('countdown').innerHTML += seconds + ' secs';
    }

    timer = setInterval(showRemaining, 1000);