
//SLKILLBAr

jQuery(document).ready(function(){
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
	});
    //back to top
    
      $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#back-to-top').click(function () {
            $('#back-to-top').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        
        $('#back-to-top').tooltip('show');
});


//WOW ANIMATE
new WOW().init();
//$('#experience').addClass('bounceInRight');
//$('#work').addClass('wow');
//$('#work').addClass('fadeInUp');
$('#work .col-sm-6').addClass('wow');
//$('#work #viewAll .col-sm-6:nth-child(odd)').addClass('bounceInLeft');
