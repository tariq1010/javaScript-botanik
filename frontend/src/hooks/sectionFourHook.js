import { SectionsService } from "services/sectionsServices";
import { CommonHook } from "./commonHook";

export const EditSectionFourHook = () => {
  const { data, setData, setError, loading, setLoading, error } = CommonHook();
  const editSectionFour = async (id, data) => {
    try {
      setLoading(true);
      const result = await SectionsService.editSectionFour(id, data);
      if (result.response == "success" && result.data) {
        setData(result.data);
      }
    } catch (error) {
      setError(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return {
    editSectionFour,
    data,
    loading,
    error,
  };
};

export const GetSectionFourHook = () => {
  const { data, setData, setError, loading, setLoading, error } = CommonHook();
  const getSectionFour = async () => {
    try {
      setLoading(true);
      const result = await SectionsService.getSectionFour();
      if (result.response == "success" && result.data) {
        setData(result.data);
      }
    } catch (error) {
      setError(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return {
    getSectionFour,
    data,
    loading,
    error,
  };
};
