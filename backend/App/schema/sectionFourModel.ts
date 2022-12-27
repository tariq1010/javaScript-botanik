const mongoose = require("mongoose");

let sectionFourSchema = mongoose.Schema(
  {
    heading1: { type: String },
    text1: { type: String },
    heading2: { type: String },
    text2: { type: String },
    heading3: { type: String },
    text3: { type: String },
  },
  { timestamps: true }
);
const SectionFour = mongoose.model(
  `${process.env.PROJECT_NAME}SectionFour`,
  sectionFourSchema
);

export { SectionFour };
