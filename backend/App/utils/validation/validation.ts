const Joi = require("@hapi/joi");

const sectionFourSchema = Joi.object({
    text1: Joi.string().required("text1 is required"),
    text2: Joi.string().required("text2 is required"),
    text3: Joi.string().required("text3 is required"),
    heading1: Joi.string().required("heading1 is required"),
    heading2: Joi.string().required("heading2 is required"),
    heading3: Joi.string().required("heading3 is required"),
  }).options({
    abortEarly: false,
    allowUnknown: true,
  });

  const sectionOneSchema = Joi.object({
    text: Joi.string().required("text1 is required"),
    
  }).options({
    abortEarly: false,
    allowUnknown: true,
  });


  export={sectionFourSchema,sectionOneSchema}