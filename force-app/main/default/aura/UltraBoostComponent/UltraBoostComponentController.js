
({
	myAction : function(component, event, helper) {
		
	},
	
	handlePlatformEvent : function(component, event, helper) {
		var model = event.getParam("model");
		//console.log("caught the event here is the model " + model);
		var share = component.find("share");
		var term = component.find("term");
	
		if(model === "shared"){
			
			$A.util.removeClass(term,"slds-show");
			$A.util.addClass(term,"slds-hide");
			
			$A.util.removeClass(share,"slds-hide");
			$A.util.addClass(share,"slds-show");
			
		}else{
			$A.util.removeClass(term,"slds-hide");
			$A.util.addClass(term,"slds-show");
			
			$A.util.removeClass(share,"slds-show");
			$A.util.addClass(share,"slds-hide");
		}
		
		
	}
})