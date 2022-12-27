
const mongoose = require("mongoose");

let sectionOneSchema = mongoose.Schema(
    {
        text: {type: String,},
        image: { type: String,},
    },
    {timestamps: true,});
const SectionOne = mongoose.model(`${process.env.PROJECT_NAME}SectionOne`, sectionOneSchema);

export { SectionOne }

