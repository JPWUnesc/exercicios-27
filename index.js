const fs = require('fs')

var fp = fs.readFileSync("frase.txt", "utf8")
var rl = require('readline-sync')

fp = fs.readFileSync("frase.txt", "utf8")

var frase = rl.question("Insira uma frase: ")

fp = fs.writeFileSync("frase.txt", frase+"\n", {encoding: "utf8", flag: "a"})
