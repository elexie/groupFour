articlesAndOverview=$("#articlesAndOverview");
var currentSlide=1
var incomingSlide=1

var currentWeek=1
var incomingWeek=1

var isWeekOverview=true //whether weekOverview is clicked

function returnPath(week)
{
	if(week==1){path="../json/week1"}
	if(week==2){path="../json/week2"}
	if(week==3){path="../json/week3"}
}
function slideArticle()
{
	$(".Mun").click(function(){
			incomingSlide=1;
			console.log("incomingSlide: "+incomingSlide);

		 animateArticle(incomingSlide)
	});

	$(".Nei").click(function(){
			incomingSlide=2;
			console.log("incomingSlide: "+incomingSlide);

			animateArticle(incomingSlide)
	});

	$(".Var").click(function(){
			incomingSlide=3;
			console.log("incomingSlide: "+incomingSlide);
			animateArticle(incomingSlide)
	});

	$(".Win").click(function(){
			incomingSlide=4;
			console.log("incomingSlide: "+incomingSlide);

			animateArticle(incomingSlide)
	});
//	animateMargin(incomingSlide);
}
function animateArticle(incomingSlide)
{
		diff=incomingSlide-currentSlide;
		margin=(Math.abs(diff)*100)/(1);

	//	console.log("incomingSlide before: "+incomingSlide)
		if(diff<0) //a previous article
		{
			$("#articlesAndOverview").animate({"margin-left":"+="+margin+"%"},"medium");
		}

		else
		{
			$("#articlesAndOverview").animate({"margin-left":"-="+margin+"%"},"medium");
		}
		currentSlide=incomingSlide
		console.log("currentSlide: "+currentSlide)
		console.log("margin: "+"-="+margin+"%")
}

function slideWeek()
{
	$("#weekOverview").click(function(){
		incomingWeek=1;
		isWeekOverview=true
		animateWeek();
	//	alert("week1");
	});
	$("#week01").click(function(){
		incomingWeek=2;
		isWeekOverview=false
		animateWeek();
	//	alert("week1");
	});

	$("#week02").click(function(){
		incomingWeek=3;
		isWeekOverview=false
		animateWeek();
	//	alert("week1");
	});

	$("#week03").click(function(){
		incomingWeek=4;
		isWeekOverview=false
	  animateWeek();
	//	alert("week1");
	});
}

function animateWeek()
{
	diff=incomingWeek-currentWeek;
	weekHeight=1
	if(currentWeek==1/*from weekOverview to a week*/)
	{
		if(incomingWeek==2)
		{
		weekHeight=63//from overview to week1
		}
		if(incomingWeek==3)
		{
		weekHeight=110.5  //overview to week2
		}
		if(incomingWeek==4)
		{
		weekHeight=126.3//overview to week3
		}
		//weekHeight=(63)//from overview to week1
		//weekHeight=110.5 overview to week2
		alert("weekHeight: "+weekHeight)
	}
	else if(incomingWeek==1)/*from a week to weekOverview*/
	{
		if(currentWeek==2)
	 	 {
	 	 weekHeight=(63)//from overview to week1
	 	 }
	 	 if(currentWeek==3)
	 	 {
	 	 weekHeight=110.5  //overview to week2
	 	 }
	 	 if(currentWeek==4)
	 	 {
	 	 weekHeight=126.3//overview to week3
	 	 }
	}
	else
	{
			weekHeight=158 //158
			alert("weekHeight: "+weekHeight)
	}
	margin=(Math.abs(diff))*weekHeight;

//	console.log("incomingSlide before: "+incomingSlide)
	if(diff<0) //a previous week
	{
		$("#articlesAndOverview").animate({"margin-top":"+="+margin+"%"},"medium");
//		$("#articlesAndOverview").animate({"height":"+=10%"},"medium");
	}

	else
	{
		$("#articlesAndOverview").animate({"margin-top":"-="+margin+"%"},"medium");
		$("#page1,#page3,#bottom,#weeksOverview").animate({"height":"0%"},"slow")
		$("#threeWeeksWrapper").animate({"margin-top":"63%"},"slow")
		$(".anArticleTitle").css("height","4%")
		$(".anArticleMeta").css("height","1.5%")
		// $("#weeksNavigation").css("width",".2%")
		$("#weeksArticles").css("width","100%")
		// $("#weeksNavigationWrapper2").css("width",".2%")
	//	$("anArticleWrapper").animate({"width":"53%"},"slow")
//		$("#weeksOverview").animate({"height":"%"},"slow")
//		$("#articlesAndOverview").animate({"height":"+=10%"},"medium");
	}
	currentWeek=incomingWeek;
//	alert($("#articlesAndOverview").height())

}

// function loadArticles(week)
// 	{
// 	path=returnPath(week);
// 	var xhttp=new XMLHttpRequest(); //create an http object
//    var arr,returnVal, title, location,date,desc;
//
// 	   xhttp.onreadystatechange= function(){
//
// 	         if(xhttp.readyState==4 && this.status==200){//connection was successful
//
// 	           theArticle=JSON.parse(xhttp.responseText).article;//stores the entire article
// 	           theArticle=theArticle[0];
// 						 finalArticle="";
//
// 						 for(int x=0; x<theArticle.length;x++)
// 						 {
// 							 finalArticle+=theArticle[0][x.toString()];
// 						 }
// 			   $("#articleTextP").html(finalArticle);
// 			   }
// 	   }
// 	   xhttp.open("GET", path, true);
// 	   xhttp.send();
// 	} //loadArticles

function showWeeks()
{
	$("#articles,#dropDownDiv").mouseenter(function(){
			 $("#dropDownDiv").stop().slideDown();
	 });
	 $("#articles,#dropDownDiv").mouseleave(function(){
			 $("#dropDownDiv").stop().slideUp();
	 });

}
function showNames()
{
    $("#team,#nameDrop").mouseenter(function(){
                                           $("#nameDrop").stop().slideDown();
                                           });
    $("#team,#nameDrop").mouseleave(function(){
                                           $("#nameDrop").stop().slideUp();
                                           });
    
}
$(document).ready(function(){
	showWeeks();
    showNames();
});
