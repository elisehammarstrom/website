
    $(document).ready(function() {
        $('#fullpage').fullpage({
    	// sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke'],
    	loopHorizontal:false,
    	scrollingSpeed: 1100,
    	controlArrows: false
		});


		$('#societyTech').click(function(e){
			//empties previously shown content in .learnings-content-area
			$( ".learnings_content_area" ).empty();

			//function call to show content for societytech
			displaySocietyTech();

			return false; //makes so it does not go to the link

		});

		$('#webDevelopment').click(function(e){
			//empties previously shown content in .learnings-content-area
			$( ".learnings_content_area" ).empty();

			//function call to show content for webdevelopment
			displayWebDevelopment();

			return false; //makes so it does not go to the link

		});


    });

	function moveToLeftSlide() {
		$.fn.fullpage.moveTo('centerpage', 0);
	}

	function moveToRightSlide() {
		$.fn.fullpage.moveTo('centerpage', 2);
	}

	function moveToCenter() {
		$.fn.fullpage.moveTo('centerpage', 1);
	}

	function moveToTop() {
		$.fn.fullpage.moveTo('top', 0);
	}

	function moveToBottom() {
		$.fn.fullpage.moveTo('bottom', 0);
	}



	function displaySocietyTech() {


		var newHTML = [];
		var societyTechArray = [{ title:'Weapons of Math Destruction ', author:"Cathy O'Neil ", src:'cathy.jpg'},{ title:'Thinking Fast and Slow ', author:"Daniel Kahneman ", src:'daniel.jpg'}]; 
		

		$.each(societyTechArray, function(index, value) {
    	
    	//push array object one by one into array newHTML and join the content of array object (its value) as a <span>
    	newHTML.push('<div class="arrayObject"><img class="learnings_image" src=' + societyTechArray[index].src + ' />' + '<p class="title">' + societyTechArray[index].title +'</p>'+ '<p class="author">' + societyTechArray[index].author + '</p> </div>');

    	// adds our array to learnings content area as a paragraph
		$( "<div>" +  newHTML[index] + "</div>" ).appendTo( ".learnings_content_area" );

		});

	}

	function displayWebDevelopment() {

		//array to store the html surrounded objects
		var newHTML = [];
		//array with objects
		var webDevelopmentArray = [{ title:'CSS animations '},{ title:'jQuery '}]; 
		

		$.each(webDevelopmentArray, function(index, value) {
    	
    	//push array object one by one into array newHTML and join the content of array object (its value) as a <span>
    	newHTML.push('<div class="arrayObject"><p class="title">' + webDevelopmentArray[index].title + '</p><p class="author">' + webDevelopmentArray[index].author + '</p></div>');
		

    	// adds our array to learnings content area as a paragraph
		$( "<div>" +  newHTML[index] + "</div>" ).appendTo( ".learnings_content_area" );

		});



	}



