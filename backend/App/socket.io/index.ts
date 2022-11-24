const { nftCount } = require("../controller/nftCount");
const conn = require("../../index");

const channel = async (io: any) => {
  io.on("connect", async () => {
    console.log("connecting");
    const count = await nftCount();
    conn.io.sockets.emit("nftCount",  count );
  });
};

export { channel };
