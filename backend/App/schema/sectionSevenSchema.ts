const mongoose = require("mongoose");

let sectionSevenSchema = mongoose.Schema(
  {
    image: { type: String },
  },
  { timestamps: true }
);
const SectionSeven = mongoose.model(
  `${process.env.PROJECT_NAME}SectionSeven`,
  sectionSevenSchema
);

export { SectionSeven };
