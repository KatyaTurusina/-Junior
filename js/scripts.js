$('#menu-accordion-container>ul>li').on('click', function(){

    var is_open = $(this).hasClass('open')

    $('#menu-accordion-container>ul>li').removeClass('open')

    var is_childrens = $(this).find('ul').length
    
    if(is_childrens > 0 && !is_open){
        $(this).addClass('open')
    }
        
})

$('.showListMobile').on('click', function(){
    $('.aside').toggleClass('view')
})

$('#close-menu').on('click', function(){
    $('.aside').removeClass('view')
})

$(function() {
	if(document.querySelector('.galleria')){
		Galleria.loadTheme('js/galleria/galleria.classic.js');
		Galleria.run('.galleria');
	}
});