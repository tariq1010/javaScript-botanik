// import { useNavigate } from "react-router-dom";
// import { FaqsSectionService } from "services/faqsSectionServices";
// import {  BrowserUtility } from "utility";
// import { CommonHook } from "./commonHook";

import { useNavigate } from "react-router-dom";
import { SectionOneService } from "services/sectionOneServices";
import { CommonHook } from "./commonHook";

export const CreateFaqsSectionHook = () => {
  const { data, setData, setError, loading, setLoading, error } = CommonHook();
  const navigate = useNavigate()

  const createFaqsSection = async (id,data) => {
    try {
      setLoading(true);
      const result = await SectionOneService.editSectionOne(id,data);
      setData(result.data);
    } catch (error) {
      setError(error);
      setLoading(false)
    } finally {
      setLoading(false);
    }
  };

  return {
    createFaqsSection,
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
        const result = await SectionOneService.getSectionOne();
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