"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const os_1 = require("os");
function getHostname() {
    return os_1.hostname();
}
function main() {
    return `The hostname is ${getHostname()}`;
}
console.log(main());
