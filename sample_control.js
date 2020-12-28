//Control
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
    insMbox.addClickTracking();
  }
  else { 
    insMbox.tryAgain(arguments); 
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