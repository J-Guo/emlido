$(document).mouseup(function(e){	 
var menu_btn=$('.menu-btn');
var noti_bell=$('.noti-bell');


if (!menu_btn.is(e.target) && menu_btn.has(e.target).length === 0) {
	if($('body').hasClass('togle-menu')){
            $('body').removeClass('togle-menu')
	}
    }

if (!noti_bell.is(e.target) && noti_bell.has(e.target).length === 0) {
	if($('body').hasClass('togle-menu1')){
            $('body').removeClass('togle-menu1')
            
	}
    }
});
$(document).ready(function() {
		
$('.count-number').click(function (){	   
  $(this).next().slideToggle('rating-hover');
});

$(document).mouseup(function(e)
{
    var container = $(".rating-hover");
    if (!container.is(e.target) // if the target of the click isn't the container...
            && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.slideUp();
    }
});

if ($('html').hasClass('desktop')) {
    new WOW().init();
			  } 

banner_height();
banner_height1();
banner_height2();
banner_height3()
  function browser_class(u) {

    var ua = u.toLowerCase(),

        is = function (t) {
			
			

            return ua.indexOf(t) > -1

        },

        g = 'gecko',

        w = 'webkit',

        s = 'safari',

        o = 'opera',

        m = 'mobile',

        h = document.documentElement,

        b = [(!(/opera|webtv/i.test(ua)) && /msie\s(\d)/.test(ua)) ? ('ie ie' + RegExp.$1) : is('firefox/2') ? g + ' ff2' : is('firefox/3.5') ? g + ' ff3 ff3_5' : is('firefox/3.6') ? g + ' ff3 ff3_6' : is('firefox/3') ? g + ' ff3' : is('gecko/') ? g : is('opera') ? o + (/version\/(\d+)/.test(ua) ? ' ' + o + RegExp.$1 : (/opera(\s|\/)(\d+)/.test(ua) ? ' ' + o + RegExp.$2 : '')) : is('konqueror') ? 'konqueror' : is('blackberry') ? m + ' blackberry' : is('android') ? m + ' android' : is('chrome') ? w + ' chrome' : is('iron') ? w + ' iron' : is('applewebkit/') ? w + ' ' + s + (/version\/(\d+)/.test(ua) ? ' ' + s + RegExp.$1 : '') : is('mozilla/') ? g : '', is('j2me') ? m + ' j2me' : is('iphone') ? m + ' iphone' : is('ipod') ? m + ' ipod' : is('ipad') ? m + ' ipad' : is('mac') ? 'mac' : is('darwin') ? 'mac' : is('webtv') ? 'webtv' : is('win') ? 'win' + (is('windows nt 6.0') ? ' vista' : '') : is('freebsd') ? 'freebsd' : (is('x11') || is('linux')) ? 'linux' : '', 'js'];

    c = b.join(' ');

    h.className += ' ' + c;

    return c;

};

browser_class(navigator.userAgent);

$('.first-slider').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
	dots:true,
	autoplay:true,
    autoplayTimeout:5000,
	smartSpeed:1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


function banner_height() {
    var e = window.innerHeight;
    $(".home-slider").css("height", e + "px");	 
}
function banner_height2() {
    var e = window.innerHeight;
    $(".second-temp").css("height", e + "px");	 
}
function banner_height1() {
    var e = window.innerHeight;
	 jQuery(".first-slider .item").css("height" , e + "px");
    $(".first-temp-slidr" ).css("height", e + "px");
}
});

function banner_height3() {
    var e = window.innerHeight;
    $(".map-view").css("height", e - 120 + "px");	 
}

$('.menu-btn').click(function (){	
    
  $('body').toggleClass('togle-menu');
  $('body').removeClass("togle-menu1");
 });
 
  $('.noti-bell').click(function (){	
      
  $('body').toggleClass('togle-menu1');
//  if($('body').hasClass('togle-menu1')){
//      
//  }else{
      
//    $('.unread').removeClass('unread-notification');  
//    $('.unread').addClass('read-notification');  
//    updateNotification();
//  }
  $('body').removeClass("togle-menu");
  
  });
 
$('.close').click(function (){
    
  $(this).slideUp();
 });
 
$(window).on('shown.bs.modal', function() { 
     $(".close").css('display','block');
});
    
function updateNotification(){
    var base_url= $('#base_url').val();
    
    $.ajax({
        url: base_url+"/update-notification-status",
        data: {},
        success: function (theResp) {
            $(".noti-count").remove();
        }
       
    });
}
		
document.body.addEventListener('touchstart', function(e){
		/*
        if ($('body').hasClass("togle-menu")&& $(e.target).attr("id") != "left_nav_outer") {
			$('body').removeClass("togle-menu");
        }else{
			$('body').addClass("togle-menu");
        }
		*/
		if(!$(event.target).closest('#left_nav_outer').length &&
		   !$(event.target).is('#left_nav_outer')) {
			if($('#left_nav_outer').is(":visible")) {
				$('body').removeClass("togle-menu");
			}
		} 
		
		
}, false);


