function getArticle(userNum,pgCount,articleDiv){
  //articleDiv div to insert article in
	var xhttp=new XMLHttpRequest(); //create an http object
   xhttp.onreadystatechange= function(){

         if(xhttp.readyState==4 && this.status==200){//connection was successful

           theArticle=JSON.parse(xhttp.responseText);//stores the entire article
					 finalArticle=""
						if(userNum==0){//elexie Munyeneh
						//	console.log("lexie\n")
						//	console.log(theArticle.mun[0]["1"])
							for(x=0;x<pgCount;x++)
							{
							finalArticle+=theArticle.mun[0][x.toString()]
							}
						}
						if(userNum==1){//nathaniel nietz
							// console.log("Neitz\n")
							// console.log(theArticle.nei)
							for(x=0;x<pgCount;x++)
							{
							finalArticle+=theArticle.nei[0][x.toString()]
							}

						}
						if(userNum==2){//makr varney
							// console.log("varn\n")
							// console.log(theArticle.varn)
							for(x=0;x<pgCount;x++)
							{
							finalArticle+=theArticle.varn[0][x.toString()]
							}
						}
						if(userNum==3){//tyler winkler
							// console.log("win\n")
							// console.log(theArticle.win)
							for(x=0;x<pgCount;x++)
							{
							finalArticle+=theArticle.win[0][x.toString()]
							}
						}
		   $(articleDiv).html(finalArticle);
		   }
   }
	 xhttp.open("GET", "https://elexie.github.io/groupFour/json/week1.json", true);
//	 xhttp.open("GET", "../json/week1.json", true);
   xhttp.send();
}
function slideArtcle()
{
  $("#mun").click(function(){
    animateWidth(1)
  });

  $("#nei").click(function(){
    animateWidth(2);
  });

  $("#var").click(function(){
    animateWidth(3);
  });

  $("#win").click(function(){
    animateWidth(4);
  });
}
var currentSlide=1;
function animateWidth(incomingSlide)
{
  diff=currentSlide-incomingSlide
  margin=(Math.abs(diff)*100);

  if(diff<0) //sliding forward
  {
    $("#articlesWrapperWrapper").animate({"margin-left":"-="+margin+"%"},"medium");
  }
  else
  {
    $("#articlesWrapperWrapper").animate({"margin-left":"+="+margin+"%"},"medium");
  }
  currentSlide=incomingSlide
}


$(document).ready(function(){
	slideArtcle();
  getArticle(0,4,"#munTextDiv")
	getArticle(1,4,"#neiTextDiv")
	getArticle(2,5,"#varTextDiv")
	getArticle(3,4,"#winTextDiv")
});
