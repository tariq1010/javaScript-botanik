const {
  EditSectionFive,
  GetSectionFive,
} = require("../model/sectionFiveModel");

const editSectionFive = async (ctx: any) => {
  try {
    const body = ctx.request.body;
    const id = ctx.params.id;
    // if (ctx.file) {
    //   body.image_path = `${process.env.BACKEND_URL}/${ctx.file.filename}`;
    // }

    const data = await EditSectionFive(id, body);
    if (data.error) throw data.error;
    ctx.body = {
      response: "success",
      data: data,
    };
  } catch (error) {
    ctx.status = 500;
    ctx.body = {
      response: "failure",
      error: error,
    };
  }
};

const getSectionFive = async (ctx: any) => {
  try {
    const data = await GetSectionFive();
    if (data.error) throw data.error;
    ctx.body = {
      response: "success",
      data: data,
    };
  } catch (error) {
    ctx.status = 500;
    ctx.body = {
      response: "failure",
      error: error,
    };
  }
};
export = { editSectionFive, getSectionFive };
