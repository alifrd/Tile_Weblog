/* ********************************* */
/* ********************************* */
/* tile  emotions */

		$(".OFF").fadeOut();	
		
		var move = function(obj){
			$("#"+obj+" > i").css({ 'margin-top':'0px' ,
    					'WebkitTransition' : 'ease-in-out 0.4s',
  				  		'MozTransition'    : 'ease-in-out 0.4s',
					    'MsTransition'     : 'ease-in-out 0.4s',
					    'OTransition'      : 'ease-in-out 0.4s',
					    'transition'       : 'ease-in-out 0.4s'
						})
    		$("#"+obj).css({ 'font-size':'30px',
						'WebkitTransition' : 'ease-in-out 0.2s',
  				  		'MozTransition'    : 'ease-in-out 0.2s',
					    'MsTransition'     : 'ease-in-out 0.2s',
					    'OTransition'      : 'ease-in-out 0.2s',
					    'transition'       : 'ease-in-out 0.2s'
						})
    		$("#"+obj+" > p").addClass("hidden");
    		$("#"+obj+"+ figcaption").removeClass("hidden");
		};
		
		var remove = function(obj){
		
			$("#"+obj).css({ 'font-size':'50px',
						'WebkitTransition' : 'ease-in-out 0.2s',
  				  		'MozTransition'    : 'ease-in-out 0.2s',
					    'MsTransition'     : 'ease-in-out 0.2s',
					    'OTransition'      : 'ease-in-out 0.2s',
					    'transition'       : 'ease-in-out 0.2s'
						})
    		$("#"+obj+ " > i").css({ 'margin-top':'50px' ,
    					'WebkitTransition' : 'ease-in-out 0.45s',
  				  		'MozTransition'    : 'ease-in-out 0.45s',
					    'MsTransition'     : 'ease-in-out 0.45s',
					    'OTransition'      : 'ease-in-out 0.45s',
					    'transition'       : 'ease-in-out 0.45s'
						})
    		$("#"+obj+" > p").removeClass("hidden");
    		$("#"+obj+"+ figcaption").addClass("hidden");
		
		};

		var make_tile = function(obj){
			
			var grandpa_id = document.getElementById(obj).parentElement.parentElement.id;
			
			//postion for any tile
			if(grandpa_id=="team"){
				$("#"+obj).css({ 
							'left': '43.5%',
							'top': '12%'
	  						})
			}
			else if(grandpa_id=="social"){
				$("#"+obj).css({
						'left': '38%',
						'top': '12%'
	  					})	
			}
			else if(grandpa_id=="setting"){
				$("#"+obj).css({
						'left': '34%',
						'top': '39%'
	  					})	
			}
			else if(grandpa_id=="code"){
				$("#"+obj).css({
						'left': '48%',
						'top':'23%'
						})	
			}	

			//set const style
			$("#"+obj).css({ 
						'font-size':'30px',
						'WebkitTransition' : 'ease-in-out 0.2s',
	  			  		'MozTransition'    : 'ease-in-out 0.2s',
					    'MsTransition'     : 'ease-in-out 0.2s',
					    'OTransition'      : 'ease-in-out 0.2s',
					    'transition'       : 'ease-in-out 0.2s'
					})

			$("#"+obj+" > p").addClass("hidden"); //hide title
			$("#"+grandpa_id).addClass("reset_background");	//reset under backgrounf	
			$("#"+grandpa_id+"> figure > div").fadeIn(100);	//fade under div
		
		};
	
		var remove_tile = function(obj){
			var grandpa_id = document.getElementById(obj).parentElement.parentElement.id;
		
			//postion for any tile
			if(grandpa_id=="team"){
				$("#"+obj).css({ 
							'left': '40%',
							'top': '5%'
							})
			}
			else if(grandpa_id=="social"){
				$("#"+obj).css({ 
						'left': '40%',
						'top': '5%'
						})
			}
			else if( grandpa_id=="setting"){
				$("#"+obj).css({ 
						'left': '40%',
						'top': '25%'
						})
			}
			else if(grandpa_id=="code"){
				$("#"+obj).css({
						'left': '48%',
						'top': '-10%'
						})	
			}	


			//set const style
			$("#"+obj).css({ 
						'font-size':'50px',
						'WebkitTransition' : 'ease-in-out 0.17s',
	  			  		'MozTransition'    : 'ease-in-out 0.17s',
					    'MsTransition'     : 'ease-in-out 0.17s',
					    'OTransition'      : 'ease-in-out 0.17s',
					    'transition'       : 'ease-in-out 0.17s'
					})
			
			
			$("#"+obj+" > p").removeClass("hidden");//show tile
			$("#"+grandpa_id).removeClass("reset_background");//reset background		
			$("#"+grandpa_id+"> figure > div").fadeOut(150);//fade under div
		
		};
		

		$("article > figure > span").bind('click', function(){	
			myHandlerFunction( $(this).attr('id') );
		});
		function test(obj) {
		//	console.log(obj);
			myHandlerFunction( obj );
		}


		
		var first = true;
		
		function myHandlerFunction(obj) {
		
		if (obj!="ele6" & obj!="ele11")    
		    if (obj!="ele3" & obj!="ele7" & obj!="ele9" & obj!="ele10") {
		    	if(first){
		    		move(obj); 
		    	}
			
				else
		    		remove(obj);
		    }
		    else{
		    	if(first)
		    		make_tile(obj); 
				else
					remove_tile(obj);
			}

			first = !first; 
		}

	

/* ********************************* */
/* ********************************* */
/* theme change */
$(document).ready(function(){	
		
		var change_theme = function(choosen){
			if ("day"==choosen) {
				$("div.mask img").attr('src','img/1.jpg');
				$('[class*="background"]').removeClass("background_day").removeClass("background_cloudy").removeClass("background_green").removeClass("background_night").removeClass("background_snow").addClass("background_day");
			}
			else if("cloudy"==choosen) {
				$("div.mask img").attr('src','img/2.png');
				$('[class*="background"]').removeClass("background_day").removeClass("background_cloudy").removeClass("background_green").removeClass("background_night").removeClass("background_snow").addClass("background_cloudy");
			
			}
			else if("green"==choosen) {
				$("div.mask img").attr('src','img/3.png');
				$('[class*="background"]').removeClass("background_day").removeClass("background_cloudy").removeClass("background_green").removeClass("background_night").removeClass("background_snow").addClass("background_green");
				
			}
			else if("night"==choosen) {
				$("div.mask img").attr('src','img/4.png');	
				$('[class*="background"]').removeClass("background_day").removeClass("background_cloudy").removeClass("background_green").removeClass("background_night").removeClass("background_snow").addClass("background_night");
			
			}
			else if("snow"==choosen) {
				$("div.mask img").attr('src','img/5.jpg');
				$('[class*="background"]').removeClass("background_day").removeClass("background_cloudy").removeClass("background_green").removeClass("background_night").removeClass("background_snow").addClass("background_snow");	
			}
		}

		$("#ele9 ~ div > span").bind('click',function(){
			change_theme($(this).attr('id'));
		});
});


/* ********************************* */
/* ********************************* */
/* padge slider */
$(document).ready(function(){
	$('#ele6').click(function() {
	    $('html,body').animate({scrollLeft:1500}, 800 , function() {}).promise();
	 //   console.log(document.documentElement.scrollLeft);
	});
	$('#ele11').click(function() {
	    $('html,body').animate({scrollLeft:0}, 800 , function() {}).promise();
		//    console.log(document.documentElement.scrollLeft);
	});
});

/* ********************************* */
/* ********************************* */
/* radio button */
$(document).ready(function(){
	$("#new > figure > figcaption > div > span").click(function(){
		var id = $(this).attr('id');
		var parent_id = document.getElementById(id).parentElement.id;
		$("#"+parent_id+"> #"+id+" > i:nth-child(1)").addClass("display");
		$("#new > figure > figcaption >"+"#"+parent_id+"> span[id!="+id+"] > i:nth-child(1)").removeClass("display");
	});
});


/* ********************************* */
/* ********************************* */
/* build new tile*/
$(document).ready(function(){
	var idnum = 13 ; 
	
	var element_ficaption_id=1;
		
	$("#craft").click(function(){
		var elements=document.getElementsByClassName("display");
		var element_size_id=elements[0].parentElement.id;
		var element_icon_id= elements[1].parentElement.id;
		var title = $("#text_box").val();
		var text="<article class=\"";

		
		if (element_size_id == "small") {
		text +="col-md-2";
		}
		else if(element_size_id == "normal"){
		text +="col-md-4";
		}
		else if(element_size_id == "large"){
		text +="col-md-8";
		}

		text +=" Element background_day\"><figure><span onclick=\"test(this.id)\" id=\"ele"+(idnum++)+"\"><i class=\"fa "
		

		if (element_icon_id == "bars") {
		text+="fa-bars";
		}
		else if(element_icon_id == "bell"){
		text+="fa-bell";
		}
		else if(element_icon_id == "book"){
		text+="fa-book";
		}
		else if(element_icon_id == "camera"){
		text+="fa-camera";
		}
		else if(element_icon_id == "qoute"){
		text+="fa-quote-left";
		}
		else if(element_icon_id == "heart"){
		text+="fa-heart";
		}
		else if(element_icon_id == "stethoscope"){
		text+="fa-stethoscope";
		}
		else if(element_icon_id == "star"){
		text+="fa-star";
		}

		text +="\" aria-hidden=\"true\"></i><p>"+title+"</p></span><figcaption id=\"new_fig_"+element_ficaption_id+"\" class=\"hidden\"><p>Fill Your Tile</p><span id=\"set"+element_ficaption_id+"\"><i class=\"fa fa-check\" aria-hidden=\"true\"></i></span><span id=\"edit"+element_ficaption_id+"\"><i class=\"fa fa-edit\" aria-hidden=\"true\"></i></span></figcaption></figure></article>"
		
		element_ficaption_id++;
		$("#prev").after(text);
		$("figcaption[id^=new_fig_] > span:even").fadeOut(100);

	});	
});
	

/* ********************************* */
/* ********************************* */
/* inline edit*/
$(document).ready(function(){
	var firsttime=0;
	

	
	$('body').on('click', 'figcaption[id^=new_fig_] > span', function(){
    	var id = $(this).attr('id');
    	var parent_id = document.getElementById(id).parentElement.id;
		
    	children=$("#"+parent_id).children().toArray();
    	if (children.length > 3) {
			firsttime = 0 ;
		}
		
		console.log(parent_id);
		if (~id.indexOf("edit")) {
			var content=$("#"+parent_id+" > p").html();
			$("#"+parent_id+"> p").fadeOut(100);
			$("#"+parent_id+"> span:odd").fadeOut(100);
			$("#"+parent_id+"> span:even").fadeIn(100);
			if (firsttime == 0) {
				$("#"+parent_id+"> p").after('<textarea placeholder="Type in here now">' + content + '</textarea>'); 
				firsttime++ ; 
			}
			else{
				$("#"+parent_id+"> textarea").fadeIn();
				$("#secedit").html('<textarea id="secedit" placeholder="Type in here now">' + content + '</textarea>'); 
			}	
		}
		else{
			var input_content=$("#"+parent_id+"> textarea").val();
			$("#"+parent_id+"> p").fadeIn(100);
			$("#"+parent_id+"> span:even").fadeOut(200);
			$("#"+parent_id+" > span:odd").fadeIn(200);
			$("#"+parent_id+"> p").html(input_content);
			$("#"+parent_id+"> textarea").fadeOut(10);
		}
	});

});
