import { SectionsService } from "services/sectionsServices";
import { CommonHook } from "./commonHook";

export const EditSectionEightHook = () => {
  const { data, setData, setError, loading, setLoading, error } = CommonHook();
  const editSectionEight = async (id,data) => {
    try {
      setLoading(true);
      const formData=new FormData()
      formData.append("section_eight_image",data)
      const result = await SectionsService.editSectionEight(id,formData);
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



export const AddSectionEightHook = () => {
  const { data, setData, setError, loading, setLoading, error } = CommonHook();
  const addSectionEight = async (data) => {
    try {
      const formData=new FormData()
      formData.append("section_eight_image",data)
      setLoading(true);
      const result = await SectionsService.addSectionEight(formData);
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
    addSectionEight,
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