$(document).ready(function(){ 
		 $( "#date" ).datepicker({
			showOtherMonths: true,
			selectOtherMonths: true,
				dateFormat: "d M",
				firstDay: 1,
				dayNamesMin: [ "S", "M", "T", "W", "T", "F", "S" ]
			});
		$('#from').timepicker({
			interval:60
		 });
		 $('#to').timepicker({
			interval:60
		 });

		/* 
		  var script = document.createElement('script');
		  script.src = 'flexcroll.js';
		  script.async = false;
		  document.head.appendChild(script);*/
		  
		  $("select").chosen({disable_search_threshold: 50, inherit_select_classes:true});
		  
		    $('.review_slider .bxslider').bxSlider({
				slideWidth: 670,			//ширина слайда
				slideMargin: 0,     //расстояние между слайдами
				speed: 500,         //ну понятно
				pager: true, 
				controls: true,
				randomStart: false,
				preloadImages: 'all',
				adaptiveHeight:true,
				responsive:true,
				nextText:'',
				prevText:'',
				onSliderLoad: function(currentIndex){}
				});
				
			$('.faq_nav ul li a[href^="#"]').click(function(){
			var target = $(this).attr('href');
			$(".faq_nav ul li a.active").removeClass('active');
			$('html, body').animate({scrollTop: $(target).offset().top}, 800);
			$(this).addClass('active');
			return false;
			});
						
						  
			$(".header_menu .navbar-toggle").click(function(){
			if($(this).hasClass('collapsed')){
				$('body').addClass("ov_hidden");
			}else{	
				$('body').removeClass("ov_hidden");
			}		
			});

						  
				
	  });