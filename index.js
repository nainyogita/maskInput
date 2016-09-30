$(document).ready(function() {

    var digit = 0;
    var maskedOutput = '';
    var output = '';
    var hideStr = '';
    var $input = $('#maskInput');
    var $showInput = $('#showInput');

    //No of digits to hide
    if ($input.val().length <= 4) {

        $input.on('keyup', function(event) {

            //Prevents undefined events in case of FAST TYPING and extra SHIFTS
            if (event.which != undefined) {

                //Check if event is a Backspace or delete

                //TODO: Debugging on backspace for unmasked input values
                if (event.which == 8 || event.which == 46) {
                    //Decrement one from hidden value
                    maskedOutput = maskedOutput.slice(0, -1);
                    hideStr = hideStr.slice(0, -1);
                    digit--;

                } else if (event.which > 64 || event.which < 90) {
                    //If event is a valid 123,abc or ABC or special character

                    if (digit < 4) {

                        maskedOutput += $input.val()[digit];
                        hideStr += 'x'; //increase the number of x's
                        $input.val(hideStr); //set the value of input with xxx
                        digit++;
                    }
                }
            }
        });
    }

    $showInput.on('click', function() {
        output = $input.val();
        output = maskedOutput + output.substring(digit);
        $('p').text("Input string is -->   " + output);
    });

});
