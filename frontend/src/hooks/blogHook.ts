import { BlogSectionService } from "services/blogServices";
import { CommonHook } from "./commonHook";

export const SaveBlogHook = () => {
  const { data, setData, setError, loading, setLoading, error } = CommonHook();
  const saveBlog = async (data) => {
    try {
      setLoading(true);
      const result = await BlogSectionService.addBlog(data);
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
    saveBlog,
    data,
    loading,
    error,
  };
};

export const EditBlogHook = () => {
  const { data, setData, setError, loading, setLoading, error } = CommonHook();
  const editBlog = async (id,data) => {
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
    editBlog,
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


  export const GetBlogByIdHook = () => {
    const { data, setData, setError, loading, setLoading, error } = CommonHook();
    const getBlogById = async (id) => {
      try {
        setLoading(true);
        const result = await BlogSectionService.getBlogById(id);
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
      getBlogById,
      data,
      setData,
      loading,
      error,
    };
  };