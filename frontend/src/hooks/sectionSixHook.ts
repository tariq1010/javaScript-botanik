import { SectionsService } from "services/sectionsServices";
import { CommonHook } from "./commonHook";

export const EditSectionSixHook = () => {
  const { data, setData, setError, loading, setLoading, error } = CommonHook();
  const editSectionSix = async (id,data) => {
    try {
      setLoading(true);
      const result = await SectionsService.editSectionSix(id,data);
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
    editSectionSix,
    data,
    loading,
    error,
  };
};




export const GetSectionSixHook = () => {
    const { data, setData, setError, loading, setLoading, error } = CommonHook();
    const getSectionSix = async () => {
      try {
        setLoading(true);
        const result = await SectionsService.getSectionSix();
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
    getSectionSix,
      data,
      loading,
      error,
    };
  };