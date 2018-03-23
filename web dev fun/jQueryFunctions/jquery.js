		$( document ).ready(function() {

			//.hide();
			$(".hide").click(function() {
				$(".hidden").hide();
			});

			//.show();
			$(".shownP").hide(); //<p> is hidden at doc.ready;
			$(".show").click(function() {
				$(".shownP").show();
			});


			//.toggle();
			$(".toggle").click(function() {
				$(".toggleP").toggle();
			});


			//.slideDown();
			$(".slideDownPic").hide();
			$(".slideDown").click(function() {
				$(".slideDownPic").slideDown(3000);
			});


			//.slideUp();
			$(".slideUp").click(function() {
				$(".slideUpPic").slideUp(1000, function() {
					$(".slideUpText").after("<p>Thank Buddha she's gone.</p>");
				});
			});


			//.slideToggle();
			$(".togglePic").hide();
			$(".slideToggle").click(function() {
				$(".togglePic").slideToggle(2500);
			});


			//.fadeIn();
			$(".fadeInPic").hide();
			$(".fadeIn").click(function() {
				$(".fadeInPic").fadeIn(4000);
			});


			//.fadeOut();
			$(".fadeOut").click(function() {
				$(".fadeOutPic").fadeOut(2000);
			});


			//.addClass('red');
			$(".addClass").click(function() {
				$(".addClassP").addClass('red');
			});


			//.after();
				//used in .slideUp(); above


			//.before();
				//used in .html(); below


			//.append(newParagraph);
			$(".append").click(function() {
				$(".appendP").append("</p><p>Do you like this new paragraph? Idc. </p>");
			});


			//.html();
			$(".html").click(function() {
				$(".oprahPic").after("<figcaption>Oprah APPROVES!!!</figcaption>");
			});


			//.attr();



			//.val();


			//.text();


			//.data();

		});