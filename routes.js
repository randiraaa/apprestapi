"use strict";

module.exports = (app) => {
  const jsonku = require("./controller");

  app.route("/").get(jsonku.index);
  app.route("/data").get(jsonku.displayData);
  app.route("/data/:id").get(jsonku.displayDataId);
  app.route("/add").post(jsonku.addData);
  app.route("/update/:id").put(jsonku.updateData);
  app.route("/delete/:id").delete(jsonku.deleteData);
};
