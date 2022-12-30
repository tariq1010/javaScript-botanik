
const {EditSectionEight,GetSectionEight,DeleteSectionEight,SaveSectionEight} =require("../model/sectionEightModel");

const saveSectionEight = async (ctx: any) => {
  try {

    const body = ctx.request.body;
    if (ctx.file) {
      body.image_path = `${process.env.BACKEND_URL}/${ctx.file.filename}`;
    }
    const data = await SaveSectionEight(body);
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

const editSectionEight = async (ctx: any) => {
  try {

    const body = ctx.request.body;
    const id = ctx.params.id;
    if (ctx.file) {
      body.image_path = `${process.env.BACKEND_URL}/${ctx.file.filename}`;
    }
    const data = await EditSectionEight(id, body);
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

const getSectionEight = async (ctx: any) => {
  try {
    const data = await GetSectionEight();
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

const deleteSectionEight = async (ctx: any) => {
  try {
    const id=ctx.params.id;
    console.log(id,"id")
    const data = await DeleteSectionEight(id);
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
export = { editSectionEight, getSectionEight,saveSectionEight,deleteSectionEight };
