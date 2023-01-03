const mongoose = require("mongoose");

let sectionTwoSchema = mongoose.Schema(
  {
    heading: { type: String },
    paragraph_one: { type: String },
    image: { type: String },
  },
  { timestamps: true }
);
const SectionTwo = mongoose.model(
  `${process.env.PROJECT_NAME}SectionTwo`,
  sectionTwoSchema
);

export { SectionTwo };
