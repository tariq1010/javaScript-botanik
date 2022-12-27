
const mongoose = require("mongoose");

let sectionThreeSchema = mongoose.Schema(
    {
        heading: {type: String},
        paragraph_one: {type: String},
        paragraph_two: {type: String},
        image: { type: String,},
    },
    { timestamps: true,}
);
const SectionThree = mongoose.model(`${process.env.PROJECT_NAME}SectionThree`, sectionThreeSchema);

export {SectionThree }

