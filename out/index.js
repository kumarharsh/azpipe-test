"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const os_1 = require("os");
const outdent_1 = __importDefault(require("outdent"));
function getHostname() {
    return os_1.hostname();
}
function main() {
    return outdent_1.default `The hostname is ${getHostname()}
The architecture is ${os_1.arch()}
  `;
}
console.log(main());
