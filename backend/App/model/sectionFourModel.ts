const { SectionFour } = require("../schema/sectionFourModel");

const EditSectionFour = async (id: any, obj: any) => {
  try {
    const update = {
      heading1: obj.heading1,
      text1: obj.text1,
      heading2: obj.heading2,
      text2: obj.text2,
      heading3: obj.heading3,
      text3: obj.text3,
    };
    const data = await SectionFour.findByIdAndUpdate({ _id: id }, update, {
      new: true,
    });

    if (!data) throw "not inserted";
    return data;
  } catch (error) {
    return { error: error };
  }
};

const GetSectionFour = async () => {
  try {
    const data = await SectionFour.find({});
    if (!data) throw "some think went wrong";
    return data;
  } catch (error) {
    return { error: error };
  }
};

export { EditSectionFour, GetSectionFour };
