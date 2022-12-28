import { BlogSectionService } from "services/blogServices";
import { CommonHook } from "./commonHook";

export const SaveBlogHook = () => {
  const { data, setData, setError, loading, setLoading, error } = CommonHook();
  const createFaqsBlog = async (id,data) => {
    try {
      setLoading(true);
      const result = await BlogSectionService.editBlog(id,data);
      if(result.response=="success" && result.data){
        setData(result.data);
    }
    } catch (error) {
      setError(error);
      setLoading(false)
    } finally {
      setLoading(false);
    }
  };

  return {
    createFaqsBlog,
    data,
    loading,
    error,
  };
};


export const GetBlogHook = () => {
    const { data, setData, setError, loading, setLoading, error } = CommonHook();
    const getBlog = async () => {
      try {
        setLoading(true);
        const result = await BlogSectionService.getBlog();
        if(result.response=="success" && result.data){
          setData(result.data);
      }
      } catch (error) {
        setError(error);
        setLoading(false)
      } finally {
        setLoading(false);
      }
    };
  
    return {
    getBlog,
      data,
      loading,
      error,
    };
  };