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
	  });