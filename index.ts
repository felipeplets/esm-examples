import process from "process"
import ts from "typescript"
import tsNode from "ts-node"
// Typescript does not like rewriting Specifiers so you 
// target.js as that will be the identifier of the run able result
import { helloWorld } from "./Util.js" 

console.log(helloWorld)
console.log(`NodeJS: ${process.version}`)
console.log(`TypeScript: ${ts.version}`)
console.log(`ts-node: ${tsNode.VERSION}`)
