  
jQuery(document).ready(function() {
    /*
  Code included inside $( document ).ready() will only run once the page Document Object Model (DOM) 
  is ready for JavaScript code to execute. 
  Use ready() to make a function available after the document is loaded like our Click Button Actions 
  */
  var funcName = 'jQuery.ready():: ';
  console.log(funcName + "Document Ready Message from Query");
  addImageMagnificationFeature();
  });

$( document ).ajaxComplete(function( event, xhr, settings ) {
    console.log("Ajax Response: " + xhr.responseText );
});


 function addImageMagnificationFeature() {
     var modalWindow = $('#myModalWindow').get(0);  //returns a HTML DOM Object
     var modalImg = $("#myModalImage").get(0);  //returns a HTML DOM Object
     var funcName = 'addImageMagnificationFeature():: ';
     // Retrieve all images found in our certain Div
     // var images = $(sliderNameJQ + " img");
     //var images = $( "#TestSlider img");

     // Select all Images with className .htmlImageMag - This will rule out any buttons or Other images without being member of .htmlImage class
     var images = $('img.htmlImageMag');
     // Install a onclick Handlder for all Images found
     if (images.length ) {
         images.on('click', function () {
             modalWindow.style.display = "block";
             modalImg.src = this.src;
             //alert("Ouch click in A htmlImage !");
         });
         console.log(funcName + "__Found " + images.length + " images in DIV:  ");

         // Get the <span> element that closes the modal Window
         var closeButton = $("#modalWindowCloseBtn").get(0);
         // When the user clicks on <span> (x), close the modal Window
         closeButton.onclick = function () {
             console.log(funcName + " __ Closing Image Window");
             modalWindow.style.display = "none";
             //alert("Ouch - click ON modalWindowCloseBtn ");
         } 
     }else {
          console.log(funcName + "__Found NO images in DIV:  ");	
			}
		}	