import { hostname } from "os";

function getHostname(): string {
  return hostname();
}

function main() {
  return `The hostname is ${getHostname()}`;
}

console.log(main());
