const environment = {
    MONGOOSE_URL: "mongodb+srv://test:test123@cluster0.1cezz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    USER_TOKEN: "_secuRe@walLeton&apI2coNnect_4",
    RPC_URL: "https://rinkeby.infura.io/v3/9043c5907b4f4696a35189799c013dee",
    CLIENT_URL:"http://localhost:3000",
    ADMIN_TOKEN: '_secuReOwl@sweaslhLietMintingon&apI2coNnect_4'
}


if (process.env.NODE_ENV === "development") {
    environment.MONGOOSE_URL = "mongodb+srv://test:test123@cluster0.1cezz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    environment.USER_TOKEN = "_secuRe@walLeton&apI2coNnect_4"
    environment.RPC_URL = "https://rinkeby.infura.io/v3/9043c5907b4f4696a35189799c013dee"
}


if (process.env.NODE_ENV === "production") {
    environment.MONGOOSE_URL = "mongodb+srv://test:test123@cluster0.1cezz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    environment.USER_TOKEN = "_secuRe@walLeton&apI2coNnect_4"
    environment.RPC_URL = "https://rinkeby.infura.io/v3/9043c5907b4f4696a35189799c013dee"
}


if (process.env.NODE_ENV === "staging") {
    environment.MONGOOSE_URL = "mongodb+srv://test:test123@cluster0.1cezz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    environment.USER_TOKEN = "_secuRe@walLeton&apI2coNnect_4"
    environment.RPC_URL = "https://rinkeby.infura.io/v3/9043c5907b4f4696a35189799c013dee"
}


export = { environment };