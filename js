$(function(){

var gnbOpen = false;
    $('.gnb').mouseenter(function(){
		$('#header .sub_bg, #header .header_inner .gnb .sub').addClass('open');
		gnbOpen = true;
    }).mouseleave(function(){
		$('#header .sub_bg, #header .header_inner .gnb .sub').removeClass('open');
		gnbOpen = false;
	});

var naviClon = $('.gnb').contents().clone();
var navi_list = $('<div class="mobile"</div>');
navi_list.append(naviClon);
navi_list.appendTo('.m_menu');


$('#footer .sitemap_inner > ul > li').on('click', function(){
	$('#footer .sitemap_inner > ul > li::before').toggleClass('open');
	
});
 $('.mobile .sub_menu').on('click', function(){
	 $(this).find('.sub').toggleClass('open');
 });

 $('.mobile_btn').on('click', function(){
	$('.m_menu').addClass('open');
});
 $('.close').on('click', function(){
	 $('.m_menu').removeClass('open');
 });

});
