({
	getBusinessUnitRecord : function(component, event, helper) {		
         helper.getBusinessUnitRecord(component, event, helper);
	},
    
    saveRecords : function(component, event, helper) {
         helper.saveRecords(component, event, helper);
    },
    showSpinner: function(component, event, helper) {
        component.set("v.Spinner", true);
   },
    hideSpinner : function(component,event,helper){
        component.set("v.Spinner", false);
    }
})();