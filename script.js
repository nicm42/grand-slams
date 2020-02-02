function grandslams(){
	//Set up array of Grand Slam dates - one for the start date and one for the end date
	var startDates = [2001,2405,2906,3108];
	var endDates = [0202,0706,1207,1309];
	//Get today's date
	var today = new Date();
	var todayDate = today.getDate();
	var todayMonth = today.getMonth() + 1; //since month starts at 0

	$('#slams').on('change', function() {
	  console.log($(this).val());
	});	
}
