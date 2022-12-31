import { SectionsService } from "services/sectionsServices";
import { CommonHook } from "./commonHook";

export const EditSectionThreeHook = () => {
  const { data, setData, setError, loading, setLoading, error } = CommonHook();
  const editSectionThree = async (id, data) => {
    try {
      setLoading(true);
      let formData = new FormData();
      if (data.constructor === File) {
        formData.append("section_three_image", data);
      } else {
        formData = data;
      }
      const result = await SectionsService.editSectionThree(id, formData);
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
    getSectionThree,
    data,
    loading,
    error,
  };
};
