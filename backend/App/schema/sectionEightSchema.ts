
const mongoose = require("mongoose");

let sectionEightSchema = mongoose.Schema(
    {
        image: { type: String,},
    },
    {timestamps: true,});
const SectionEight = mongoose.model(`${process.env.PROJECT_NAME}SectionEight`, sectionEightSchema);

export { SectionEight }

