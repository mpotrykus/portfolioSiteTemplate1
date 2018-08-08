$(document).ready(function() {

	/*Slide Large*/
	
	var slideLargeCon = $('#slideLargeCon');
	slideLargeCon.hide();
	$(".galImg").click(function() {
		slideLargeCon.show();
		
		var src = ($(this).attr('src'));
		var slideFullPic = $('#slideLargePicCon');
		
		var srcPlace = "<img id='slideLargePic' src='" + src + "'><p style='color: white;'>Click again to hide</p>";
		
		slideFullPic.html(srcPlace);
	})
	
	$('#ShopFullPicCon').click(function() {
		slideLargeCon.show();
		
		var src = ($('img', this).attr('src'));
		var slideFullPic = $('#slideLargePicCon');
		
		var srcPlace = "<img id='slideLargePic' src='" + src + "'><p style='color: white;'>Click again to hide</p>";
		
		slideFullPic.html(srcPlace);
	})
	
	$(slideLargeCon).click(function() {
		slideLargeCon.hide();
	})

	/*Tabs*/
	
	$('div.myList ul.tabs a').click(function (e) {
	
			e.preventDefault();
			$('div.myList').children('div').hide().filter(this.hash).show();
			$('div.myList ul.tabs a').removeClass('selected');
			$(this).addClass('selected');
			
			return false;
		
		}).filter(':first').click();
	
	/*Slideshow*/
	
	var i = 2;
	function myLoop () {
	   setTimeout(function () {
			if (i < 4) {
				$('#slideLink' + i).trigger('click');
				myLoop();
				i++;
			}
			else if (i == 4){
				i = 1;
				myLoop();
			}
		}, 3000)
	}
	
	myLoop();
	
	
	/*Background Fade-ins*/
		
		var backgroundImage = $('.myList');
		backgroundImage.animate({
			opacity: '1.0'
			}, 800);

	/*Spanimate*/
		
		var span = $('#sidebanner');
		span.animate({
			top: '0px',
			opacity: '1.0'
			}, 1000);
		
		var span2 = $('#nav');
		span2.animate({
			left: '0vw',
			opacity: '1.0'
			}, 2000);
			
		var span3 = $('#bio');
		span3.animate({
			top: '14vw',
			opacity: '1.0'
			}, 2000);
			
	/*Follow Buttons*/
	
		var span4 = $('#followBtn1');
		span4.animate({
			height: '1.75vw',
			}, 500);
			
		var span5 = $('#followBtn2');
		span5.animate({
			height: '1.75vw',
			}, 1000);
			
		var span6 = $('#followBtn3');
		span6.animate({
			height: '1.75vw',
			}, 1500);
			
		var span7 = $('#followBtn4');
		span7.animate({
			height: '1.75vw',
			}, 2000);
			
		var span8 = $('#followBtn5');
		span8.animate({
			height: '1.75vw',
			}, 2500);
			
	/*Shopping Cart*/
	
	$('input').bind('click keyup', function(e) {
		e.preventDefault();
		
		function calculate() {
			var qty_item = [$('#qty_item_1').val(), $('#qty_item_2').val(), $('#qty_item_3').val(), $('#qty_item_4').val(), $('#qty_item_5').val()]
			
			var subTotal = [(qty_item[0] * 4.99),(qty_item[1] * 5.99),(qty_item[2] * 7.99),(qty_item[3] * 5.99),(qty_item[4] * 7.99)]
			
			$('#total_item_1').html(subTotal[0].toFixed(2));
			$('#total_item_2').html(subTotal[1].toFixed(2));
			$('#total_item_3').html(subTotal[2].toFixed(2));
			$('#total_item_4').html(subTotal[3].toFixed(2));
			$('#total_item_5').html(subTotal[4].toFixed(2));
			
			var grandTotal1 = ((qty_item[0] * 4.99) + (qty_item[1] * 5.99)+ (qty_item[2] * 7.99)+ (qty_item[3] * 5.99)+ (qty_item[4] * 7.99))
			
			$('#grandTotal').html(grandTotal1.toFixed(2));
			
			//validation//
				
				$('form').validate({
					rules:{
						qty_item_1:{
							number: true
						},
						qty_item_2:{
							number: true
						},
						qty_item_3:{
							number:true
						},
						qty_item_4:{
							number:true
						},
						qty_item_5:{
							number:true
						}
					},
					messages:{
						qty_item_1: {
							number: 'Please enter a number'
						},
						qty_item_2: {
							number: 'Please enter a number'
						},
						qty_item_3: {
							number: 'Please enter a number'
						},
						qty_item_4: {
							number: 'Please enter a number'
						},
						qty_item_5: {
							number: 'Please enter a number'
						}
					}
				});	
		}
		
		calculate();
		
	});
	
	$('#orderButton').click(function() {
		$('#thankYou').html('THANK YOU! YOUR ORDER WILL SHIP SOON');
		$('#thankYou').css({"color" : "red"});
		$('#audio3')[0].play();
		
		var grandTotal = $('#grandTotal').text();
		console.log(grandTotal);
	});
	
	/*Sound*/
	
	 if(window.location.pathname == "/E:/SCHOOL%202016/JAVASCRIPT/Coding/Final%20Project%20120316/Final/index.html"){
		$('#audio2')[0].play();
	}
	
	console.log(window.location);
	
	$("a")
	  .each(function(i) {
		if (i != 0) { 
		  $("#audio1")
			.clone()
			.attr("id", "audio1" + i)
			.appendTo($(this).parent()); 
		}
		$(this).data("beeper", i);
	  })
	  .mouseenter(function() {
		$("#audio1" + $(this).data("beeper"))[0].play();
	  });
	$("#audio1").attr("id", "audio10");
	
	/*Shop Gallery*/
	
	$(".ShopThumbThumb").click(function () {
		var id = ($(this).attr('id'));
		var ShopFullPic = $('#ShopFullPicCon');
		
		var idPlace = "<img id='ShopFullPic' src='images/shop/" + id + ".jpg'>";
		
		ShopFullPic.html(idPlace);
		
		
	});
	


});
