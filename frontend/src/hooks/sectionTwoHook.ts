import { SectionsService } from "services/sectionsServices";
import { CommonHook } from "./commonHook";

export const EditSectionOneHook = () => {
  const { data, setData, setError, loading, setLoading, error } = CommonHook();
  const editSectionTwo = async (id,data) => {
    try {
      setLoading(true);
      const result = await SectionsService.editSectionTwo(id,data);
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
    editSectionTwo,
    data,
    loading,
    error,
  };
};




export const GetSectionTwoHook = () => {
    const { data, setData, setError, loading, setLoading, error } = CommonHook();
    const getSectionTwo = async () => {
      try {
        setLoading(true);
        const result = await SectionsService.getSectionTwo();
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
        getSectionTwo,
      data,
      loading,
      error,
    };
  };