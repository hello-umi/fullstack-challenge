"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const constants_1 = require("./constants");
const app = express_1.default();
app.use(express_1.default.json({ limit: constants_1.BODY_SIZE_LIMIT }));
app.post("/", (req, res) => {
    // TODO
    res.send({ success: true });
});
app.listen(constants_1.PORT, () => {
    console.log(`Listening at http://localhost:${constants_1.PORT}`);
});
