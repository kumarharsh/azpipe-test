import outdent from "outdent";
import { hostname, arch } from "os";

function getHostname(): string {
  return hostname();
}

function main() {
  return outdent`The hostname is ${getHostname()}
The architecture is ${arch()}
  `;
}

console.log(main());
