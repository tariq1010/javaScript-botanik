
const mongoose = require("mongoose");

let sectionSixSchema = mongoose.Schema(
    {
        heading: {type: String},
        paragraph_one: {type: String},
        paragraph_two: {type: String},
        image: { type: String,},
    },
    { timestamps: true,}
);
const SectionSix = mongoose.model(`${process.env.PROJECT_NAME}SectionSix`, sectionSixSchema);

export {SectionSix }

