module.exports = class Config{
    constructor() {
        this.axios = require("axios");
        this.express = require("express");
        this.app = this.express();
        this.ejs = require("ejs");
        this.server = this.app.listen(8080,()=>console.log("Running at port 8080"))
        this.io = require("socket.io")(this.server);
        this.path = require("path");
    }
}