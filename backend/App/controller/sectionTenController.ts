import { GetSectionTen, EditSectionTen } from "../model/sectionTenModel";

const editSectionTen = async (ctx: any) => {
  try {
    const body = ctx.request.body;
    const id = ctx.params.id;

    const data = await EditSectionTen(id, body);
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

const getSectionTen = async (ctx: any) => {
  try {
    const data = await GetSectionTen();
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
export = { editSectionTen, getSectionTen };
