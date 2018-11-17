function getArticle(userNum,pgCount,articleDiv){
  //articleDiv div to insert article in
	var xhttp=new XMLHttpRequest(); //create an http object
   xhttp.onreadystatechange= function(){

         if(xhttp.readyState==4 && this.status==200){//connection was successful

           theArticle=JSON.parse(xhttp.responseText);//stores the entire article
					 finalArticle=""
					 authors = ["mun","nei","varn","win"]
					 authorName=authors[userNum]
					 for(x=0;x<pgCount;x++)
					 {
					 finalArticle+=theArticle.authorName[0][x.toString()]
					 }
		   $(articleDiv).html(finalArticle);
		   }
   }
//  	xhttp.open("GET", "https://elexie.github.io/groupFour/json/week3.json", true);
	 xhttp.open("GET", "../json/week3.json", true);
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
  getArticle(0,3,"#munTextDiv")
	getArticle(1,4,"#neiTextDiv")
	getArticle(2,4,"#varTextDiv")
	getArticle(3,4,"#winTextDiv")
});
