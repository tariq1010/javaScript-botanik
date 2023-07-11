import { SectionEight } from "../schema/sectionEightSchema";
const fs = require("fs");

const SaveSectionEight = async (obj: any) => {
  try {
    const data = await SectionEight.create({
      image: obj.image_path,
    });
    if (!data) throw "not inserted";
    return data;
  } catch (error) {
    return { error: error };
  }
};

const EditSectionEight = async (id: any, obj: any) => {
  try {
    console.log("okkk", id, obj);
    const update = {
      image: obj.image_path,
    };

    // console.log(obj, id);

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

const DeleteSectionEight = async (id: any) => {
  try {
    const data = await SectionEight.findByIdAndDelete({ _id: id });
    if (!data) throw "not found";
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
    const deleted = "carousel deleted";
    return deleted;
  } catch (error) {
    return { error: error };
  }
};

export = {
  EditSectionEight,
  GetSectionEight,
  SaveSectionEight,
  DeleteSectionEight,
};
