<style>
.hideOverlay{
  display: none;
}
.showOverlay{
  display: block;
}
</style>

<script src="common_atjs.js" type="text/javascript" defer></script>

<script defer>
var mboxname = 'ab_mboxName';
var ttName = 'ab_testName';

if (window.adobe.target && window.atGetOffer) {
    window.atGetOffer(mboxname, ttName);
}

var insMbox = insMbox || {  
  //add code
},
init: function(){ 
  if(!window.ttOffer){
    insMbox.updateDOM();
    insMbox.addClickTracking();
  }
  else { 
    insMbox.tryAgain(arguments); 
  }
},
updateDOM : function(){
  var overlayElement = $("div#overlay__wrapper");
  if(overlayElement.hasClass('showOverlay')) {
    overlayElement.removeClass("showOverlay");
    overlayElement.addClass("hideOverlay");
  } 
},
addClickTracking : function(){
  $("main").on("click", "#header p a.button", function(){    
    if (window.adobe.target) {
         window.atTrackEvent(mboxname, ttName, "clicked", "ctaTop");
    }
  });
}
if (typeof(window.ttOffer) =="undefined"){
    insMbox.init();        
}                
</script>