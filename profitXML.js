//var text, parser, xmlDoc;

////var text = 'profitXML.xml';

//parser = new DOMParser(); //created a parser object
//xmlDoc = parser.parseFromString(text, "text/xml"); //created a xmldoc DOM for parsing
//document.getElementById("demo").innerHTML = xmlDoc.getElementsByTagName("promoRatexml")[0].nodeValue;
//document.getElementById("demo").innerHTML = "test";
//document.getElementById("demo").innerHTML = "test";
/*if (window.XMLHttpRequest) {

    xmlhttp = new XMLHttpRequest();
    
} else {
       xmlhttp= new ActiveXObject("Microsoft.XMLHTTP");
}



xmlhttp.open("GET", "profitXML.xml", false);
xmlhttp.send();

xmlDoc = xmlhttp.responseXML;

document.querySelector("#demo").innerHTML = xmlDoc.getElementsByTagName("promoRate")[0].childNodes[0].nodeValue;
document.querySelector("#promoRate").value = xmlDoc.getElementsByTagName("promoRate")[0].childNodes[0].nodeValue; 
//document.querySelector("#demo").innerHTML="test";

//const demoTest = document.querySelector("p");
//demoTest.innerHTML="test";
//alert('This is a test');*/

var rawFile = new XMLHttpRequest();
rawFile.open("GET", "profileXML.txt", false);
rawFile.onreadystatechange = function() {
    if(rawFile.readyState == 4){
        var allText = rawFile.responseText;
        document.getElementById("demo").innerHTML=allText;
    }
}
rawFile.send(null);

