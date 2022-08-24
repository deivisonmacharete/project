// toggle class scroll 
$(window).scroll(function() {
    if($(this).scrollTop() > 800)
    {
        $('.navbar-trans').addClass('afterscroll');
    } else
    {
        $('.navbar-trans').removeClass('afterscroll');
    }  

});

$(window).scroll(function() {
    if($(this).scrollTop() > fixed)
    {
        $('.imgBackgroud').addClass('afterscrollImg');
    } else
    {
        $('.imgBackgroud').removeClass('afterscrollImg');
    }  

});
  
  