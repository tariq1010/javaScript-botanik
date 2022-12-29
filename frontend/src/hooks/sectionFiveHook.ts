import { SectionsService } from "services/sectionsServices";
import { CommonHook } from "./commonHook";

export const EditSectionFiveHook = () => {
  const { data, setData, setError, loading, setLoading, error } = CommonHook();
  const editSectionFive = async (id,data) => {
    try {
      setLoading(true);
      const formData=new FormData()
      if(data.constructor === File){
        formData.append ("section_five_image",data)
      }else{
        formData.append ("text",data)
      }
      const result = await SectionsService.editSectionFive(id,formData);
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
    editSectionFive,
    data,
    loading,
    error,
  };
};




export const GetSectionFiveHook = () => {
    const { data, setData, setError, loading, setLoading, error } = CommonHook();
    const getSectionFive = async () => {
      try {
        setLoading(true);
        const result = await SectionsService.getSectionFive();
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
    getSectionFive,
      data,
      loading,
      error,
    };
  };