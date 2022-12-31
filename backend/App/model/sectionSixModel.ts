const {SectionSix}=require ("../schema/sectionSixSchema");
const fs=require("fs")

const EditSectionSix = async (id:any,obj:any) => {
  try {
    if(obj.image_path){
        const previous_data=await SectionSix.findById({_id:id})
        const url =String(process.env.BACKEND_URL)
        const subStr = previous_data?.image.slice(url.length + 1);
       
      fs.unlink(`${process.env.FILE_UPLOAD_PATH}/${subStr}`,(err:any,done:any)=>{
            if(err){
                console.log("file not deleted")
            }else{
                console.log("file updated")
            }
        })
     }
    
    
    const update = {
        heading: obj.heading,
        paragraph_one: obj.paragraph_one,
        paragraph_two: obj.paragraph_two,
        image: obj.image_path,
    };
    const data = await SectionSix.findByIdAndUpdate({ _id: id }, update, {
      new: true,
    });


    if (!data) throw "not inserted";
    return data;
  } catch (error) {
    return { error: error };
  }
};

const GetSectionSix = async () => {
  try {
    const data = await SectionSix.find({});
    if (!data) throw "some think went wrong";
    return data;
  } catch (error) {
    return { error: error };
  }
};

export { EditSectionSix, GetSectionSix };
