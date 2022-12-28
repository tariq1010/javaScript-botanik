
import { APIPath } from "utility/constant/apiPath";
import { BaseService } from "./baseService";

class SectionOne {
  editSectionOne = (id,data) => {
    return BaseService.post(`${APIPath.editSectionOne}/${id}`, data);
  };
  getSectionOne = () => {
    return BaseService.get(APIPath.getSectionOne);
  };

}

const SectionOneService = new SectionOne();
Object.freeze(SectionOneService);
export { SectionOneService };