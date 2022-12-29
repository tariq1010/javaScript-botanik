import { SectionsService } from "services/sectionsServices";
import { CommonHook } from "./commonHook";

export const EditSectionOneHook = () => {
  const { data, setData, setError, loading, setLoading, error } = CommonHook();
  const editSectionOne = async (id,data) => {
    try {
    const formData=new FormData()
    if(data.constructor === File){
      formData.append ("section_one_image",data)
    }else{
      formData.append ("text",data)
    }
      setLoading(true);
      const result = await SectionsService.editSectionOne(id,formData);
      setData(result.data);
    } catch (error) {
      setError(error);
      setLoading(false)
    } finally {
      setLoading(false);
    }
  };

  return {
    editSectionOne,
    data,
    loading,
    error,
  };
};




export const GetSectionOneHook = () => {
    const { data, setData, setError, loading, setLoading, error } = CommonHook();
    const getSectionOne = async () => {
      try {
        setLoading(true);
        const result = await SectionsService.getSectionOne();
        setData(result.data);
      } catch (error) {
        setError(error);
        setLoading(false)
      } finally {
        setLoading(false);
      }
    };
  
    return {
    getSectionOne,
      data,
      loading,
      error,
    };
  };