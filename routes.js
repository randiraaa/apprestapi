"use strict";

module.exports = (app) => {
  const jsonku = require("./controller");

  app.route("/").get(jsonku, index);
};
