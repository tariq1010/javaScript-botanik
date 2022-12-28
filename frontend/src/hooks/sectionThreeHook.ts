import { SectionsService } from "services/sectionsServices";
import { CommonHook } from "./commonHook";

export const EditSectionThreeHook = () => {
  const { data, setData, setError, loading, setLoading, error } = CommonHook();
  const editSectionThree = async (id,data) => {
    try {
      setLoading(true);
      const result = await SectionsService.editSectionThree(id,data);
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
    editSectionThree,
    data,
    loading,
    error,
  };
};




export const GetSectionThreeHook = () => {
    const { data, setData, setError, loading, setLoading, error } = CommonHook();
    const getSectionThree = async () => {
      try {
        setLoading(true);
        const result = await SectionsService.getSectionThree();
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
    getSectionThree,
      data,
      loading,
      error,
    };
  };