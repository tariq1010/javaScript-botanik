import environment from "enviornment";


export const APIPath = {
  server: environment.BACKEND_BASE_URL,
  moralisServer:'https://nbnob0befkpo.usemoralis.com:2053/server',

  //admin
  login: "login",
  logout: "blacklist-token",
  auth: "auth",
  updatePassword: "update-password",
  updateUsername: "update-username",

  //cmc
  priceConversion: 'convert-price',



  editSectionOne: "edit-section-one",
  getSectionOne: "get-section-one",

  editSectionTwo: "edit-section-two",
  getSectionTwo: "get-section-two",

  editSectionThree: "edit-section-three",
  getSectionThree: "get-section-three",

  editSectionFour: "edit-section-four",
  getSectionFour: "get-section-four",

  editSectionFive: "edit-section-five",
  getSectionFive: "get-section-five",

  editSectionSix: "edit-section-six",
  getSectionSix: "get-section-six",

  editSectionSeven: "edit-section-seven",
  getSectionSeven: "get-section-seven",

  editSectionEight: "edit-section-eight",
  getSectionEight: "get-section-eight",
  addSectionEight: "save-section-eight",
  deleteSectionEight: "delete-section-eight",

  editSectionNine: "edit-section-nine",
  getSectionNine: "get-section-nine",

  editSectionTen: "edit-section-ten",
  getSectionTen: "get-section-ten",

  editBlog: "edit-section-eleven",
  getBlog: "get-section-eleven",
  getBlogById:"get-section-eleven"


  
  


 

};