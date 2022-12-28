
import { APIPath } from "utility/constant/apiPath";
import { BaseService } from "./baseService";

class BlogSection {
  editBlog = (id,data) => {
    return BaseService.post(`${APIPath.editBlog}/${id}`, data);
  };
  getBlog = () => {
    return BaseService.get(APIPath.getBlog);
  };
  getBlogById = (id) => {
    return BaseService.get(`${APIPath.getBlogById}/${id}`);
  };
  

}

const BlogSectionService = new BlogSection();
Object.freeze(BlogSectionService);
export { BlogSectionService };