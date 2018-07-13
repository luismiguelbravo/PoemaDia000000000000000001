// set up text to print, each item in array is new line
var aText = new Array(
	"POEMA A MI PAPEL",
	"leyendo propios poemas",
	"penas impresas trascendencias cotidianas",
	"sonrisa orgullosa equívoco perdonado",
	"es mío es mío es mío!",
	"leyendo letra cursiva",
	"latir interior alegre",
	"sentir que la dicha se coagula",
	"o bien o mal o bien",
	"extrañeza de sentirse innatos",
	"cáliz armonioso y autónomo",
	"límite en dedo gordo de pie cansado y",
	"pelo lavado en rizosa cabeza",
	 "no importa:",
	"es mío es mío es mío.!!"
);
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
 
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
 
function typewriter()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedtext");
 
 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 500);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}


typewriter();