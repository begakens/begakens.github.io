function sendRSVP() {
    var valid;
    valid = validateRSVP();
    if (valid) {
        jQuery.ajax
            ({
                url: "/email.php",
                data: 'RSVPMessage=' + $("#RSVPContent").val() + '&RSVPName=' + $("#RSVPName").val() + '&RSVPChk=' + $('input[name="RSVPChk"]:checked').val(),
                type: "POST",
                success: function (data) {
                    $("#frmRSVP").html(data);
                },
                error: function () { }
            });
    }
    else {
        alert('Please add your name into the box');
    }
}

$(document).ready(function () {
    setTimeout(function ()
    { var flipheight = $('.portfolio-box-caption').height(); $('.back').height(flipheight); $('.back').css("max-height", flipheight); $('.flip-container').height(flipheight); }, 400);
    console.log('Created by Adam Smyth.');
});
$('input[type="checkbox"]').on('change', function () {
    $(this).siblings('input[type="checkbox"]').prop('checked', false);

    if ($(this).prop('checked', false)) {
        $(this).prop('checked', true)
    }
});
function validateRSVP() {
    var valid = true;
    if (!$("#RSVPName").val()) {
        $("#RSVPName").css('background-color', '#FFFFDF');
        valid = false;
    }
    return valid;
}