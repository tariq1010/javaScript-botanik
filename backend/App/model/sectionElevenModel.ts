const {SectionEleven} =require("../schema/sectionElevenSchema");
const fs = require("fs");
const SaveSectionEleven = async (obj: any) => {
  try {
    const data = await SectionEleven.create({
        heading: obj.heading,
        content: obj.content,
        image: obj.image_path,
    });
    if (!data) throw "not inserted";
    return data;
  } catch (error) {
    return { error: error };
  }
};

const EditSectionEleven = async (id: any, obj: any) => {
  try {
    if (obj.image_path) {
      const previous_data = await SectionEleven.findById({ _id: id });
      const url = String(process.env.BACKEND_URL);
      const subStr = previous_data?.image.slice(url.length + 1);
      fs.unlink(
        `${process.env.FILE_UPLOAD_PATH}/${subStr}`,
        (err: any, done: any) => {
          if (err) {
            console.log("file not updated");
          } else {
            console.log("file updated");
          }
        }
      );
    }

    const update = {
        heading: obj.heading,
        content: obj.content,
        image: obj.image_path,
    };
   
    const data = await SectionEleven.findByIdAndUpdate({ _id: id }, update, {
      new: true,
    });

    if (!data) throw "not inserted";
    return data;
  } catch (error) {
    return { error: error };
  }
};

const GetSectionEleven = async () => {
  try {
    const data = await SectionEleven.find({});
    if (!data) throw "some think went wrong";
    return data;
  } catch (error) {
    return { error: error };
  }
};

const GetByIdSectionEleven = async (id: any) => {
    try {
      const data = await SectionEleven.findById({ _id: id });
      if (!data) throw "not found";
      return data;
    } catch (error) {
      return { error: error };
    }
  };

const DeleteSectionEleven = async (id: any) => {
  try {
    const data = await SectionEleven.findByIdAndDelete({ _id: id });
    if (!data) throw "not inserted";
    const url = String(process.env.BACKEND_URL);
    const subStr = data?.image.slice(url.length + 1);
    fs.unlink(
      `${process.env.FILE_UPLOAD_PATH}/${subStr}`,
      (err: any, done: any) => {
        if (err) {
          console.log("file not deleted");
        } else {
          console.log("file deleted");
        }
      }
    );
    const deleted="carousel deleted"
    return deleted;
  } catch (error) {
    return { error: error };
  }
};

export = {
  EditSectionEleven,
  GetSectionEleven,
  SaveSectionEleven,
  DeleteSectionEleven,
  GetByIdSectionEleven
};
