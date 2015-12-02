$(document).ready(function(){
// deal with facsimiles
        var radioValue = $('#select-facs input[name="facs"]:checked').val();        
        //alert(radioValue); 
        if (radioValue == 'off'){
            $('.cFacsLocal').hide();
            $('.cFacsOnline').hide();
            }
        else {
            if (radioValue =='local'){
                 $('.cFacsLocal').show();
                 $('.cFacsOnline').hide();
            }
            else{
                $('.cFacsLocal').hide();
                $('.cFacsOnline').show();
            }
        }
        $('#select-facs input[name="facs"]').on('change', function() {
        var radioValue = $('#select-facs input[name="facs"]:checked').val();        
        //alert(radioValue); 
        if (radioValue == 'off'){
             $('.cFacsLocal').hide();
             $('.cFacsOnline').hide();
        }
        else {
            if (radioValue =='local'){
                 $('.cFacsLocal').show();
                 $('.cFacsOnline').hide();
            }
            else{
                $('.cFacsLocal').hide();
                $('.cFacsOnline').show();
            }
        }
        });
}); 