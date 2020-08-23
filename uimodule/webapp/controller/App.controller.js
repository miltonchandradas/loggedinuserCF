/* eslint-disable no-console */
sap.ui.define([
  "com/sap/mydemo/controller/BaseController"
], function (Controller) {
  "use strict";

  return Controller.extend("com.sap.mydemo.controller.App", {

    onInit: function () {
      this._userModel = this.getOwnerComponent().getModel("userModel");
      let me = this;

      fetch("/myext")
        .then(res => res.json())
        .then(data => {
          me._userModel.setProperty("/", data);
          console.log(me._userModel.getProperty("/"));
        })
        .catch(err => console.log(err));
    }
  });
});
