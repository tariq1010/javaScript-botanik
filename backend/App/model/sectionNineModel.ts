const { SectionNine } = require("../schema/sectionNineSchema");
const fs = require("fs");

const EditSectionNine = async (id: any, obj: any) => {
  try {
    if (obj.image_path) {
      const previous_data = await SectionNine.findById({ _id: id });
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
      paragraph: obj.paragraph,
      image: obj.image_path,
    };
    const data = await SectionNine.findByIdAndUpdate({ _id: id }, update, {
      new: true,
    });

    if (!data) throw "not inserted";
    return data;
  } catch (error) {
    return { error: error };
  }
};

const GetSectionNine = async () => {
  try {
    const data = await SectionNine.find({});
    if (!data) throw "some think went wrong";
    return data;
  } catch (error) {
    return { error: error };
  }
};

export { EditSectionNine, GetSectionNine };
