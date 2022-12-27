
const mongoose = require("mongoose");

let sectionNineSchema = mongoose.Schema(
    {
        heading: {type: String},
        paragraph: {type: String},
        image: { type: String,},
    },
    { timestamps: true,}
);
const SectionNine = mongoose.model(`${process.env.PROJECT_NAME}SectionNine`, sectionNineSchema);

export {SectionNine }

