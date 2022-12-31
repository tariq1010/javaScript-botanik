const mongoose = require("mongoose");

let sectionFiveSchema = mongoose.Schema(
  {
    text: { type: String },
    image: { type: String },
  },
  { timestamps: true }
);
const SectionFive = mongoose.model(
  `${process.env.PROJECT_NAME}SectionFive`,
  sectionFiveSchema
);

export { SectionFive };
