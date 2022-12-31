const { SectionTwo } = require("../schema/sectionTwoSchema");
const fs = require("fs");

const EditSectionTwo = async (id: any, obj: any) => {
  try {
    if (obj.image_path) {
      const previous_data = await SectionTwo.findById({ _id: id });
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
      paragraph_one: obj.paragraph_one,
      paragraph_two: obj.paragraph_two,
      image: obj.image_path,
    };
    const data = await SectionTwo.findByIdAndUpdate({ _id: id }, update, {
      new: true,
    });

    if (!data) throw "not inserted";
    return data;
  } catch (error) {
    return { error: error };
  }
};

const GetSectionTwo = async () => {
  try {
    const data = await SectionTwo.find({});
    if (!data) throw "some think went wrong";
    return data;
  } catch (error) {
    return { error: error };
  }
};

export { EditSectionTwo, GetSectionTwo };
