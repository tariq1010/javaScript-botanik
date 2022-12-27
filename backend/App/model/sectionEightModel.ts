import { SectionEight } from "../schema/sectionEightSchema";
const fs=require("fs")

const EditSectionEight = async (id: any, obj: any) => {
  try {

    if(obj.image_path){
      const previous_data=await SectionEight.findById({_id:id})
      const url =String(process.env.BACKEND_URL)
      const subStr = previous_data?.image.slice(url.length+1);
      fs.unlink(`${process.env.FILE_UPLOAD_PATH}/${subStr}`,(err:any,done:any)=>{
          if(err){
              console.log("file not updated")
          }else{
              console.log("file updated")
          }
      })
   }

    const update = {
      image: obj.image_path,
    };
    // const data =await SectionEight.create(update)

    const data = await SectionEight.findByIdAndUpdate({ _id: id }, update, {
      new: true,
    });
    
    if (!data) throw "not inserted";
    return data;
  } catch (error) {
    return { error: error };
  }
};

const GetSectionEight = async () => {
  try {
    const data = await SectionEight.find({});
    if (!data) throw "some think went wrong";
    return data;
  } catch (error) {
    return { error: error };
  }
};

export = { EditSectionEight, GetSectionEight };
