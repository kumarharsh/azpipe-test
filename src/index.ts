import { arch, hostname } from "os";
import outdent from "outdent";

function getHostname(): string {
  return hostname();
}

function main() {
  return outdent`The hostname is ${getHostname()}
The architecture is ${arch()}
  `;
}

console.log(main());
