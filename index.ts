import process from "process"
import ts from "typescript"
import tsNode from "ts-node"

import { helloWorld } from "./Util"

console.log(helloWorld)
console.log(`NodeJS: ${process.version}`)
console.log(`TypeScript: ${ts.version}`)
console.log(`ts-node: ${tsNode.VERSION}`)
