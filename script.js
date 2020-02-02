function grandslams(){
	var slams = ['Australian Open','Roland Garros','Wimbledon','US Open'];
	//Set up array of Grand Slam dates - one for the start date and one for the end date
	var startDates = ['2001','2405','2906','3108'];
	var endDates = ['0202','0706','1207','1309'];
	//var startDates = ['2001','0602','2906','0101'];  //temporarily pretending US Open has finished
	//var endDates = ['0202','0706','1207','1301'];   //to test it (and RG is soon)
	//Get today's date
	var today = new Date();
	//var todayDay = today.getDate();
	//var todayMonth = today.getMonth() + 1; //since month starts at 0

	$('#slams').on('change', function() {
		//First find this slam in the array of slams
		var arrayPos = $.inArray($(this).val(),slams);
		//Get the start and end date of this slam
		var slamStartDay = startDates[arrayPos].substring(0,2);
		var slamStartMonth = startDates[arrayPos].substring(2);
		var slamEndDay = endDates[arrayPos].substring(0,2);
		var slamEndMonth = endDates[arrayPos].substring(2);
		var slamStart = new Date();
		slamStart.setDate(slamStartDay);
		slamStart.setMonth(slamStartMonth - 1);
		var slamEnd = new Date();
		slamEnd.setDate(slamEndDay);
		slamEnd.setMonth(slamEndMonth - 1);
		//Now check if this slam has happened, will happen or is currently happening
		//And add relevant text into #result
		var past = false; var present = false; var future = false;
		if(today < slamStart){
			future = true;
			//Now we need to work out how many days it is until it starts
			var time = Math.floor((slamStart - today) / (1000 * 60 * 60 * 24));
			$('#result').html($(this).val() + " will start in " + time + " days");
			if(time < 7){
				$('#result').append(". Are you excited yet?");
			}
			$('#result').css('color','#1b5e20');  //Make it green
		}
		if(today > slamEnd){
			past = true;
			$('#result').html($(this).val() + " has already happened this year :(");
			$('#result').css('color','#922b21');  //Make it red
		}
		if(today > slamStart && today < slamEnd){
			present = true;
			$('#result').html($(this).val() + " is currently being played!");
			$('#result').css('color','#1b4f72');  //Make it blue
		}
	});	
}
