
({
	myAction : function(component, event, helper) {
		
	},
   
	handleModel : function(component, event, helper) {
		//console.log("This is the event " + event.currentTarget.dataset.value);
		
		var platformEvent = $A.get("e.c:PlatformModelEvent");
		platformEvent.setParams({
			"model" : event.currentTarget.dataset.value
		});
		platformEvent.fire();
	}
})