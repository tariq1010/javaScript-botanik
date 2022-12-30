
import { APIPath } from "utility/constant/apiPath";
import { BaseService } from "./baseService";

class BlogSection {
  editBlog = (id,data) => {
    return BaseService.put(`${APIPath.editBlog}/${id}`, data);
  };
  getBlog = () => {
    return BaseService.get(APIPath.getBlog);
  };
  addBlog = (data) => {
    return BaseService.post(APIPath.addBlog,data);
  };
  getBlogById = (id) => {
    return BaseService.get(`${APIPath.getBlogById}/${id}`);
  };
  deleteBlog = (id) => {
    return BaseService.delete(`${APIPath.deleteBlog}/${id}`);
  };
  

}

const BlogSectionService = new BlogSection();
Object.freeze(BlogSectionService);
export { BlogSectionService };