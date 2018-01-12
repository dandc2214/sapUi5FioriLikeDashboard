//sap.ui.controller("fiorilikedashboard.dashboard.dashboard", {
//
///**
//* Called when a controller is instantiated and its View controls (if available) are already created.
//* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
//* @memberOf fiorilikedashboard.dashboard.dashboard
//*/
//	onInit: function() {
//		var sPath = jQuery.sap.getModulePath("fiorilikedashboard.dashboard", "/data.json");
//		var oModel = new JSONModel(sPath);
//		this.getView().setModel(oModel);
//	},
//
///**
//* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
//* (NOT before the first rendering! onInit() is used for that one!).
//* @memberOf fiorilikedashboard.dashboard.dashboard
//*/
////	onBeforeRendering: function() {
////
////	},
//
///**
//* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
//* This hook is the same one that SAPUI5 controls get after being rendered.
//* @memberOf fiorilikedashboard.dashboard.dashboard
//*/
////	onAfterRendering: function() {
////
////	},
//
///**
//* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
//* @memberOf fiorilikedashboard.dashboard.dashboard
//*/
////	onExit: function() {
////
////	}
//	
//	press : function(evt) {
//		MessageToast.show("The GenericTile is pressed.");
//	},
//
//	handleTileDelete : function (evt) {
//		var tile = evt.getParameter("tile");
//		evt.getSource().removeTile(tile);
//	}
//
//});

sap.ui.define([
		'jquery.sap.global',
		'sap/ui/core/mvc/Controller',
		'sap/ui/model/json/JSONModel'
	], function(jQuery, Controller, JSONModel) {
	"use strict";

	var PageController = Controller.extend("fiorilikedashboard.dashboard.dashboard", {

		onInit : function (evt) {
			// set mock model
			var sPath = jQuery.sap.getModulePath("fiorilikedashboard.dashboard", "/data.json");
			var oModel = new JSONModel(sPath);
			this.getView().setModel(oModel);
		},
		
		handleEditPress : function (evt) {
			var oTileContainer = this.getView().byId("container");
			var newValue = !oTileContainer.getEditable();
			oTileContainer.setEditable(newValue);
			evt.getSource().setText(newValue ? "Done" : "Edit");
		},

		handleBusyPress : function (evt) {
			var oTileContainer = this.getView().byId("container");
			var newValue = !oTileContainer.getBusy();
			oTileContainer.setBusy(newValue);
			evt.getSource().setText(newValue ? "Done" : "Busy state");
		},

		handleTileDelete : function (evt) {
			var tile = evt.getParameter("tile");
			evt.getSource().removeTile(tile);
		}
	});

	return PageController;

});