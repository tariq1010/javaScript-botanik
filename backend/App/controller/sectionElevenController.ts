
const {EditSectionEleven,GetSectionEleven,DeleteSectionEleven,SaveSectionEleven,GetByIdSectionEleven} =require("../model/sectionElevenModel");

const saveSectionEleven = async (ctx: any) => {
  try {
    const body = ctx.request.body;
    if (ctx.file) {
      body.image_path = `${process.env.BACKEND_URL}/${ctx.file.filename}`;
    }
    const data = await SaveSectionEleven(body);
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

const editSectionEleven = async (ctx: any) => {
  try {

    const body = ctx.request.body;
    const id = ctx.params.id;
    if (ctx.file) {
      body.image_path = `${process.env.BACKEND_URL}/${ctx.file.filename}`;
    }

    const data = await EditSectionEleven(id, body);
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

const getSectionEleven = async (ctx: any) => {
  try {
    const data = await GetSectionEleven();
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

const deleteSectionEleven = async (ctx: any) => {
  try {
    const id=ctx.params.id;
    const data = await DeleteSectionEleven(id);
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
const getByIdSectionEleven = async (ctx: any) => {
    try {
      const id=ctx.params.id;
      const data = await GetByIdSectionEleven(id);
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
export = { editSectionEleven, getSectionEleven,saveSectionEleven,deleteSectionEleven,getByIdSectionEleven };
