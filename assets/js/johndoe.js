/*!
=========================================================
* JohnDoe Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

//Messaging using Jquery
$(document).ready(function() {
    $('#bt1').click(function() {
        $('#fr1').attr('action',
                       'mailto:brett0825@gmail.com?subject=' +
                       $('#tb1').val() + '&body=' + $('#tb2').val() + $('#tb3').val());
        $('#fr1').submit();
    });
});