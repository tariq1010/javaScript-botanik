import { nftImages } from "../model/nftModel";

export const nftsImages = async (ctx: any) => {
  try {
    let page = ctx.request.query?.page;
    console.log("aya", page);

    const data = await nftImages(page);
    console.log(data, "data");
    if (data?.data?.error) throw data?.data?.error;
    ctx.body = {
      response: "success",
      data: { nfts_images: data.data, total: data?.total_data },
    };
  } catch (error) {
    ctx.status = 500;
    ctx.body = {
      response: "failure",
      error: error,
    };
  }
};
