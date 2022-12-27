const {GetSectionNine,EditSectionNine}=require("../model/sectionNineModel");

const editSectionNine = async (ctx:any) => {
    try {
      const body = ctx.request.body;
      const id = ctx.params.id;
    
        if(ctx.file){
        body.image_path= `${process.env.BACKEND_URL}/${ctx.file.filename}`;
      }
      const data = await EditSectionNine(id,body);
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

  const getSectionNine = async (ctx:any) => {
    try {
      const data = await GetSectionNine();
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
  module.exports={editSectionNine,getSectionNine}