
const mongoose = require("mongoose");

let sectionFiveSchema = mongoose.Schema(
    {
        image: { type: String,},
    },
    {timestamps: true,});
const SectionFive = mongoose.model(`${process.env.PROJECT_NAME}SectionFive`, sectionFiveSchema);

export { SectionFive }

