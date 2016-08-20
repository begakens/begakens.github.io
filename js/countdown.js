
    countdown();
    setInterval(countdown, 1000);

    function countdown()
    {
        var startDateTime = moment();
        var endDateTime = moment('2016-05-26 12:30:00');

        var timeLeft = endDateTime.diff(startDateTime, 'milliseconds', true);

        var years = Math.floor(moment.duration(timeLeft).asYears());

        endDateTime = endDateTime.subtract(years, 'years');
        timeLeft = endDateTime.diff(startDateTime, 'milliseconds', true);

        var months = Math.floor(moment.duration(timeLeft).asMonths());

        endDateTime = endDateTime.subtract(months, 'months');
        timeLeft = endDateTime.diff(startDateTime, 'milliseconds', true);

        var days = Math.floor(moment.duration(timeLeft).asDays());

        endDateTime = endDateTime.subtract(days, 'days');
        timeLeft = endDateTime.diff(startDateTime, 'milliseconds', true);

        var hours = Math.floor(moment.duration(timeLeft).asHours());

        endDateTime = endDateTime.subtract(hours, 'hours');
        timeLeft = endDateTime.diff(startDateTime, 'milliseconds', true);

        var minutes = Math.floor(moment.duration(timeLeft).asMinutes());

        endDateTime = endDateTime.subtract(minutes, 'minutes');
        timeLeft = endDateTime.diff(startDateTime, 'milliseconds', true);

        var seconds = Math.floor(moment.duration(timeLeft).asSeconds());

        //if (hours > 0 && hours < 2)
        //{
        //    document.getElementById('countdown').innerHTML = months + ' month ' + days + ' days ' + hours + ' hour';
        //}
        //else
        //{
        //    document.getElementById('countdown').innerHTML = months + ' month ' + days + ' days ' + hours + ' hours';
        //}

        if (hours > 0 && hours < 2) {
            document.getElementById('countdown').innerHTML = days + ' days ' + hours + ' hour ' + minutes + ' minutes';
        }
        else {
            document.getElementById('countdown').innerHTML = days + ' days ' + hours + ' hours ' + minutes + ' minutes';
        }

    }




    
    
