
import { APIPath } from "utility/constant/apiPath";
import { BaseService } from "./baseService";

class Sections {
  editSectionOne = (id,data) => {
    return BaseService.put(`${APIPath.editSectionOne}/${id}`, data);
  };
  getSectionOne = () => {
    return BaseService.get(APIPath.getSectionOne);
  };
  editSectionTwo = (id,data) => {
    return BaseService.put(`${APIPath.editSectionTwo}/${id}`, data);
  };
  getSectionTwo = () => {
    return BaseService.get(APIPath.getSectionTwo);
  };
  editSectionThree= (id,data) => {
    return BaseService.put(`${APIPath.editSectionThree}/${id}`, data);
  };
  getSectionThree= () => {
    return BaseService.get(APIPath.getSectionThree);
  };
  editSectionFour= (id,data) => {
    return BaseService.post(`${APIPath.editSectionFour}/${id}`, data);
  };
  getSectionFour= () => {
    return BaseService.get(APIPath.getSectionFour);
  };
  editSectionFive= (id,data) => {
    return BaseService.post(`${APIPath.editSectionFive}/${id}`, data);
  };
  getSectionFive= () => {
    return BaseService.get(APIPath.getSectionFive);
  };
  editSectionSix= (id,data) => {
    return BaseService.post(`${APIPath.editSectionSix}/${id}`, data);
  };
  getSectionSix= () => {
    return BaseService.get(APIPath.getSectionSix);
  };

  editSectionSeven= (id,data) => {
    return BaseService.post(`${APIPath.editSectionSeven}/${id}`, data);
  };
  getSectionSeven= () => {
    return BaseService.get(APIPath.getSectionSeven);
  };
  editSectionEight= (id,data) => {
    return BaseService.post(`${APIPath.editSectionEight}/${id}`, data);
  };
  getSectionEight= () => {
    return BaseService.get(APIPath.getSectionEight);
  };
  editSectionNine= (id,data) => {
    return BaseService.post(`${APIPath.editSectionNine}/${id}`, data);
  };
  getSectionNine= () => {
    return BaseService.get(APIPath.getSectionNine);
  };
  editSectionTen= (id,data) => {
    return BaseService.post(`${APIPath.editSectionTen}/${id}`, data);
  };
  getSectionTen= () => {
    return BaseService.get(APIPath.getSectionTen);
  };


}

const SectionsService = new Sections();
Object.freeze(SectionsService);
export { SectionsService };