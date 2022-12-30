import axios from "axios";
import { SectionsService } from "services/sectionsServices";
import { CommonHook } from "./commonHook";




export const EditSectionTenHook = () => {
  const { data, setData, setError, loading, setLoading, error } = CommonHook();
  const editSectionTen = async (id,data) => {
    try {
      setLoading(true);
      const result = await SectionsService.editSectionTen(id,data);
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
    editSectionTen,
    data,
    loading,
    error,
  };
};

// export const EditSectionTenHook = () => {
//   const { data, setData, setError, loading, setLoading, error } = CommonHook();
//   const editSectionTen = async (id,data) => {
//     try {
//       console.log(data,"data",id)
//       const obj={
//         text:"okkk"
//       }
//       setLoading(true);
//       // const result = await SectionsService.editSectionTen(id,obj);
//       const result=await axios.put("http://localhost:8080/get-section-ten/"+id,obj);
//       console.log(result,"data")
//     //   if(result?.response=="success" && result.data){
//         setData(result.data);
//     // }
//     } catch (error) {
//       setError(error);
//       setLoading(false)
//     } finally {
//       setLoading(false);
//     }
//   };

//   return {
//     editSectionTen,
//     data,
//     loading,
//     error,
//   };
// };




export const GetSectionTenHook = () => {
    const { data, setData, setError, loading, setLoading, error } = CommonHook();
    const getSectionTen = async () => {
      try {
        setLoading(true);
        const result = await SectionsService.getSectionTen();
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
    getSectionTen,
      data,
      loading,
      error,
    };
  };