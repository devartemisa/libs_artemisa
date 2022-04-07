jQuery(document).ready(function( $ ) {
    $(window).scroll(function(){
        var scroll = jQuery(window).scrollTop();
        if (scroll >= 100) {
            $("#menuFijo").addClass("menu-color-fijo-scroll");
            $("#img-logo").addClass("cambiar-logo");
        
        }
  
        else{
            $("#menuFijo").removeClass("menu-color-fijo-scroll");
            $("#img-logo").removeClass("cambiar-logo");
        }
    });
});