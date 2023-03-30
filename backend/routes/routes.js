const express = require("express");
const routerMakanan = express.Router();

const Makanan = require("../controller/makanan.controller");

routerMakanan.get("/getAll", Makanan.showMakanan);
routerMakanan.get("/getOne/:id", Makanan.showMakananById);
routerMakanan.post("/post", Makanan.createMakanan);
routerMakanan.patch("/patch/:id", Makanan.updateMakanan);
routerMakanan.delete("/delete/:id", Makanan.deleteMakanan);

module.exports = { routerMakanan };
