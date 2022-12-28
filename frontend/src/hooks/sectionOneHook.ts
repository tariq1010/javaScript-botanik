import { SectionsService } from "services/sectionsServices";
import { CommonHook } from "./commonHook";

export const EditSectionOneHook = () => {
  const { data, setData, setError, loading, setLoading, error } = CommonHook();
  const editSectionOne = async (id,data) => {
    try {
      setLoading(true);
      const result = await SectionsService.editSectionOne(id,data);
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