var cvaReady;

(function() {
    
    var onDeviceReady = function() {
		console.log("Entering onDeviceReady");
		//Let the user know that the deviceReady event has fired
		//alert('ready');
		//Set the variable that lets other parts of the program
		//know that Cordova has initialized
		cvaReady = true;
          navigator.notification.alert('Please, click on the pictures to view it in fullscreen mode, click on the arrows by the side to view details, click on the bar at the top of the page to view other contents. Welcome and God bless you.',null,'God Loves You','Close'); 

       	//===================================================
		//Do whatever other stuff you want to do on startup
		//===================================================
		console.log("Leaving onDeviceReady");
	};
    
	//add an event listener for the Cordova deviceReady event.
	document.addEventListener('deviceready', onDeviceReady, false);    
}());

$('.anchor').bind('click',arrange);

function arrange(event){
    var src=this.id;
    var name=this.title;
    var img=$('#show');    
    img[0].src=src;
    var theName=$('#theName');
    theName.html(name);
    
 }
 
 $('.anchor1').bind('click',arrange1);
function arrange1(event){
    var src=this.title;
    var img=$('#show1');    
    img[0].src=src;
}

$('.anchor2').bind('click',arrange2);
function arrange2(event){
    var src=this.title;
    var name=this.id;
    var img=$('#show2');    
    img[0].src=src;
    var theName=$('#theName1');
    theName.html(name);
}

$('.close').bind('click',goodbye);

function goodbye(){
     navigator.notification.confirm('Do you want to Exit?',doContinue,'Please Confirm',['Yes','No']);     
}

function doContinue(button){
  var buttonNum=button;
  if(buttonNum=="1" || buttonNum==1 && navigator.app){
    navigator.app.exitApp();
  }else if(buttonNum=="1" || buttonNum==1 && navigator.device){
    navigator.device.exitApp();
  }
}