/*********** import starts ***********/
const http = require("http");
const socketio = require("socket.io");
const { web3CronJob } = require("./App/cronJob");
require("dotenv").config();
("use strict");
const koa = require("koa");
var bodyParser = require("koa-bodyparser");
const cors = require("@koa/cors");
const cron = require("node-cron");
const { router } = require("./App/routes/routes");
const { channel } = require("./App/socket.io/index");
const serve = require("koa-static");
// mongoose Connection
const { connectDB } = require("./App/db/index");

connectDB();
const PORT = "8080";

const app = new koa();
app.use(cors());
// app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());
app.use(serve("./public/uploads"))
// cron.schedule(" */1 * * * *", async function () {
//   console.log("----cron job----");
//   web3CronJob();
// });

const server = app.listen(PORT, () =>
  console.log(`Server has started. http://localhost:${PORT}`)
);
//const server = app.listen(PORT);
// const io = socketio(server, {
//   cors: {
//     origin: process.env.CLIENT_URL,
//     methods: ["GET", "POST"],
//   },
// });
// channel(io);
// exports.io = io;

/**
 * index port
 */
// app.listen(PORT, () =>
//    console.log(`Server running on port: http://localhost:${PORT}`)

// );

//server.listen(PORT, () => console.log(`Server has started. http://localhost:${PORT}`));
