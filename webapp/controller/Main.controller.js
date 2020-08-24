sap.ui.define([

	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/integration/library"

], function (Controller, JSONModel, library) {
	//	"use strict";

	return Controller.extend("Goal.MyResume.controller.Main", {
		onInit: function () {

			//this._sValidPath = sap.ui.require.toUrl("./webapp/Goal/MyResume/image/RohitUpdatedResume.pdf");
			var oJSONModel = new sap.ui.model.json.JSONModel();
			oJSONModel.loadData("../model/mockData/data.json");
			this.getView().setModel(oJSONModel, "CustomModel");

			this.getView().setModel(this._oModel);

			this.getCard1();
			this.getCard2();
			//this.getBarChart();

		},

		getCard1: function () {
			var oJSONModel = new sap.ui.model.json.JSONModel();
			oJSONModel.loadData("../webapp/model/mockData/toolsGraph.json");
			this.getView().setModel(oJSONModel, "CustomModel1");

		},

		getCard2: function () {

			var oJSONModel = new sap.ui.model.json.JSONModel();
			oJSONModel.loadData("../webapp/model/mockData/barChart.json");
			this.getView().setModel(oJSONModel, "CustomModel2");

		},

		onEmailPress: function () {

			sap.m.URLHelper.triggerEmail("rohitvolvo127@gmail.com");
		},

		onMobilePress: function () {

			sap.m.URLHelper.triggerTel("8601130587");

		},

		onLinkdinPress: function () {
			/* eslint-disable */
			window.open("https://www.linkedin.com/in/rohit-shukla-74294b124/");
		},
		onGithubPress: function () {

			window.open("https://github.com/Rohit12068", true);
		},

		onTwitterPress: function () {
			window.open("https://twitter.com/home?lang=en");
		},

		onResumePress: function () {
			window.open("./resources/image/RohitUpdatedResume.pdf", "");

		},
		onAfterRendering: function () {

			// Stop Loading screen
			var oModel = new sap.ui.model.json.JSONModel();
			$('#loading').remove();

		}
	});
});