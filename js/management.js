function getArticle(){
	var xhttp=new XMLHttpRequest(); //create an http object
   var arr,returnVal, title, location,date,desc;

   xhttp.onreadystatechange= function(){

         if(xhttp.readyState==4 && this.status==200){//connection was successful

           theArticle=JSON.parse(xhttp.responseText).article;//stores the entire article
           theArticle=theArticle[0];

		   pg1=theArticle["1"];
		   pg2=theArticle["2"];
		   pg3=theArticle["3"];
		   pg4=theArticle["4"];
		   pg5=theArticle["5"];
		   pg6=theArticle["6"];
		   pg7=theArticle["7"];
		   pg8=theArticle["8"];
		   pg9=theArticle["9"];
		   pg10=theArticle["10"];
		   pg11=theArticle["11"];
		   // console.log(pg1);
		   // console.log(pg2);
		   // console.log(pg3);
		   // console.log(pg4);
		   // console.log(pg5);
		   // console.log(pg6);
		   // console.log(pg7);

		   finalArticle=pg1+pg2+pg3+pg4+pg5+pg6+pg7+pg8+pg9+pg10+pg11;

		 //  $("#articleText").text(finalArticle);
		   $("#articleText").html(finalArticle);
		   }
   }
   xhttp.open("GET", "../json/projMang.json", true);
   xhttp.send();
}


$(document).ready(function(){
	getArticle();
});
