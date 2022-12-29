import { SectionsService } from "services/sectionsServices";
import { CommonHook } from "./commonHook";

export const EditSectionNineHook = () => {
  const { data, setData, setError, loading, setLoading, error } = CommonHook();
  const editSectionNine = async (id,data) => {
    try {
      setLoading(true);
      var formData=new FormData()
      if(data.constructor === File){
        formData.append ("section_nine_image",data)
      }else{
        formData=data
      }
      const result = await SectionsService.editSectionNine(id,formData);
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
    editSectionNine,
    data,
    loading,
    error,
  };
};




export const GetSectionNineHook = () => {
    const { data, setData, setError, loading, setLoading, error } = CommonHook();
    const getSectionNine = async () => {
      try {
        setLoading(true);
        const result = await SectionsService.getSectionNine();
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
    getSectionNine,
      data,
      loading,
      error,
    };
  };