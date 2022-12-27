const {GetSectionTwo,EditSectionTwo}=require("../model/sectionTwoModel");

const editSectionTwo = async (ctx:any) => {
    try {
      const body = ctx.request.body;
      const id = ctx.params.id;
    
        if(ctx.file){
        body.image_path= `${process.env.BACKEND_URL}/${ctx.file.filename}`;
      }
      const data = await EditSectionTwo(id,body);
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

  const getSectionTwo = async (ctx:any) => {
    try {
      const data = await GetSectionTwo();
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
  module.exports={editSectionTwo,getSectionTwo}