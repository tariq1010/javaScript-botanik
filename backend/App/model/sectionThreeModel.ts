const { SectionThree } = require("../schema/sectionThreeSchema");
const fs = require("fs");

const EditSectionThree = async (id: any, obj: any) => {
  try {
    if (obj.image_path) {
      const previous_data = await SectionThree.findById({ _id: id });
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

    const data = await SectionThree.findByIdAndUpdate({ _id: id }, update, {
      new: true,
    });

    if (!data) throw "not inserted";
    return data;
  } catch (error) {
    return { error: error };
  }
};

const GetSectionThree = async () => {
  try {
    const data = await SectionThree.find({});
    if (!data) throw "some think went wrong";
    return data;
  } catch (error) {
    return { error: error };
  }
};

export { EditSectionThree, GetSectionThree };
