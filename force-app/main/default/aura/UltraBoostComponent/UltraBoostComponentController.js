
({
	myAction : function(component, event, helper) {
		
	},
	
	handlePlatformEvent : function(component, event, helper) {
		var model = event.getParam("model");
		console.log("caught the event here is the model " + model);
		var share = component.find("share");
		var term = component.find("term");
	
		if(model == "shared"){
			console.log("We are here");
			console.log("We are term " + term );
			console.log("We are share " + share);
			
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
		
		var share = component.find("share");
		console.log("share = " + share);
		
		var term = component.find("term");
		console.log("term = " + term);
		
	}
})