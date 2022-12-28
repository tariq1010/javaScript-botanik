import { SectionsService } from "services/sectionsServices";
import { CommonHook } from "./commonHook";

export const EditSectionEightHook = () => {
  const { data, setData, setError, loading, setLoading, error } = CommonHook();
  const editSectionEight = async (id,data) => {
    try {
      setLoading(true);
      const result = await SectionsService.editSectionEight(id,data);
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
    editSectionEight,
    data,
    loading,
    error,
  };
};




export const GetSectionEightHook = () => {
    const { data, setData, setError, loading, setLoading, error } = CommonHook();
    const getSectionEight = async () => {
      try {
        setLoading(true);
        const result = await SectionsService.getSectionEight();
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
    getSectionEight,
      data,
      loading,
      error,
    };
  };