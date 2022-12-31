const { SectionTen } = require("../schema/sectionTenSchema");
const fs = require("fs");

const EditSectionTen = async (id: any, obj: any) => {
  try {
    const previous_data = await SectionTen.findById({ _id: id });
    if (obj.image_one) {
      const url = String(process.env.BACKEND_URL);
      const subStr = previous_data?.image_one.slice(url.length + 1);

      fs.unlink(
        `${process.env.FILE_UPLOAD_PATH}/${subStr}`,
        (err: any, done: any) => {
          if (err) {
            console.log("file not deleted");
          } else {
            console.log("file updated");
          }
        }
      );
    }
    if (obj.image_two) {
      const url = String(process.env.BACKEND_URL);
      const subStr = previous_data?.image_two.slice(url.length + 1);
      fs.unlink(
        `${process.env.FILE_UPLOAD_PATH}/${subStr}`,
        (err: any, done: any) => {
          if (err) {
            console.log("file not deleted");
          } else {
            console.log("file updated");
          }
        }
      );
    }

    const update = {
      text: obj.text,
      image_one: obj.image_one,
      image_two: obj.image_two,
    };

    const data = await SectionTen.findByIdAndUpdate({ _id: id }, update, {
      new: true,
    });

    if (!data) throw "not inserted";
    return data;
  } catch (error) {
    return { error: error };
  }
};

const GetSectionTen = async () => {
  try {
    const data = await SectionTen.find({});
    if (!data) throw "some think went wrong";
    return data;
  } catch (error) {
    return { error: error };
  }
};

export { EditSectionTen, GetSectionTen };
