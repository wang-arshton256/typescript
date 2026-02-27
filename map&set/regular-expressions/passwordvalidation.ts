let password: string = "tEsting64";

// ?=. Atleast 1
// *[A-Z] = sny number but atleast one capital letter
//  \w Alpha numeric
// \w{4,10}/ Alpha Numeric of atlest 4-10 characters

let regEX: any = /(?=.*[A-Z])\w{4,10}/

if (password.match(regEX)) {
    console.log("Valid Passowrd")
} else {
    console.log("Invalid Password "+ password)
}