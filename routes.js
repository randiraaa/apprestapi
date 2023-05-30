"use strict";

module.exports = (app) => {
  const jsonku = require("./controller");

  app.route("/").get(jsonku.index);

  app.route("/data").get(jsonku.displayData);

  app.route("/data/:id").get(jsonku.displayDataId);
};
