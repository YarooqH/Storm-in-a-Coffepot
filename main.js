const carousel = () => {
    var inWrap = $('.inner-wrapper'),
    $slide = $('.slide');
  
  
    function slideNext() {  
      inWrap.animate({left: '-200%'}, 200, function() {    
        inWrap.css('left', '-100%');    
        $('.slide').last().after($('.slide').first());    
      });
    
    }
  
  
     //Enabling auto scroll
     sliderInterval = setInterval(slideNext, 4000);
  
  
  
    // $('.prev').on('click', function() {
  
    //   inWrap.animate({left: '0%'}, 200, function() {
  
    //     inWrap.css('left', '-100%');
  
    //     $('.slide').first().before($('.slide').last());
  
    //   });
    // });
  
  
    // $('.next').on('click', function() {
  
    //   clearInterval(sliderInterval);
  
    //   slideNext();
  
    // });
  
}

window.onload = carousel;

// window.onload = () => {
//     main();
// }

// var slideSpeed = 3000;

// var main = function(){
//     //Carousel
//    setInterval(function() {timedDelay()}, slideSpeed);
//    //arrow-next
// //    $('.arrow-next').click(function(e){
// //       e.preventDefault();
		
// // 		var currentSlide = $('.active-slide');
// // 		var nextSlide= currentSlide.next();

// //       var currentDot = $('.active-dot');
// // 		var nextDot = currentDot.next();
		
// // 		if(nextSlide.length === 0){
// // 			nextSlide = $('.slide').first();
// //          nextDot = $('.dot').first();
// // 		}
         
// //       currentSlide.fadeOut(600, function() {
// //          $(this).removeClass('active-slide');
// // 		nextSlide.fadeIn(600).addClass('active-slide');
         
// //       currentDot.removeClass('active-dot');
// // 		nextDot.addClass('active-dot');
// //       });
// // 	});
//    //arrow-prev
// //    $('.arrow-prev').click(function(e){
// //       e.preventDefault();
		
// // 		var currentSlide = $('.active-slide');
// // 		var prevSlide= currentSlide.prev();
      
// //       var currentDot = $('.active-dot');
// // 		var prevDot = currentDot.prev();
		
// // 		if(prevSlide.length === 0){
// // 			prevSlide = $('.slide').last();
// //          prevDot = $('.dot').last();
// // 		}
		
// //       currentSlide.fadeOut(600, function() {
// //          $(this).removeClass('active-slide');
// // 		prevSlide.fadeIn(600).addClass('active-slide');
      
// //       currentDot.removeClass('active-dot');
// // 		prevDot.addClass('active-dot');
// //       });
// // 	});
// };

// //timedDelay function
// function timedDelay() {

//     var currentSlide = document.querySelector('.active-slide');
//     var nextTimedSlide = currentSlide.next();
	
// 	// var currentDot = $('.active-dot');
// 	// var nextDot = currentDot.next();
	
//    if(nextTimedSlide.length === 0 ) {
//     nextTimedSlide = document.querySelector('.slide').first();
// 		// nextDot = $('.dot').first();
// 	}
   
// 	currentSlide.fadeOut(600, function() {
// 		$(this).removeClass('active-slide');
// 	nextTimedSlide.fadeIn(600).addClass('active-slide');
		
// 		// currentDot.removeClass('active-dot');
// 		// nextDot.addClass('active-dot');
// 		});
// }



// // $(document).ready(main);