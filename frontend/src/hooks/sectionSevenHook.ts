import { SectionsService } from "services/sectionsServices";
import { CommonHook } from "./commonHook";

export const EditSectionSevenHook = () => {
  const { data, setData, setError, loading, setLoading, error } = CommonHook();
  const editSectionSeven = async (id,data) => {
    try {
      setLoading(true);
      const result = await SectionsService.editSectionSeven(id,data);
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
    editSectionSeven,
    data,
    loading,
    error,
  };
};




export const GetSectionSevenHook = () => {
    const { data, setData, setError, loading, setLoading, error } = CommonHook();
    const getSectionSeven = async () => {
      try {
        setLoading(true);
        const result = await SectionsService.getSectionSeven();
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
    getSectionSeven,
      data,
      loading,
      error,
    };
  };