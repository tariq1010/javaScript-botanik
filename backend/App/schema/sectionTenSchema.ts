
const mongoose = require("mongoose");

let sectionTenSchema = mongoose.Schema(
    {
        text: {type: String,},
        image_one: { type: String},
        image_two: { type: String},
    },
    {timestamps: true,});
const SectionTen = mongoose.model(`${process.env.PROJECT_NAME}SectionTen`, sectionTenSchema);

export { SectionTen }

