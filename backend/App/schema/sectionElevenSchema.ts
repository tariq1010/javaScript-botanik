const mongoose = require("mongoose");

let sectionElevenSchema = mongoose.Schema(
  {
    heading: { type: String },
    content: { type: String },
    image: { type: String },
  },
  { timestamps: true }
);
const SectionEleven = mongoose.model(
  `${process.env.PROJECT_NAME}SectionEleven`,
  sectionElevenSchema
);

export { SectionEleven };
