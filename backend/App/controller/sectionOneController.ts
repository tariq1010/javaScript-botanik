const { EditSectionOne, GetSectionOne } = require("../model/sectionOneModel");

const editSectionOne = async (ctx: any) => {
  try {
    const body = ctx.request.body;
    const id = ctx.params.id;
    // if (ctx.file) {
    //   body.image_path = `${process.env.BACKEND_URL}/${ctx.file.filename}`;
    // }
    console.log(body, "body");

    const data = await EditSectionOne(id, body);
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

const getSectionOne = async (ctx: any) => {
  try {
    const data = await GetSectionOne();
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
export = { editSectionOne, getSectionOne };
