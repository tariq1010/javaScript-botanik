import { useState } from "react";
import { SectionsService } from "services/sectionsServices";
import { CommonHook } from "./commonHook";

export const GetSectionsHook = () => {
  const { setError, loading, setLoading, error } = CommonHook();
  const [result, setResult] = useState({
    sectionOne: "",
    sectionTwo: "",
    sectionThree: "",
    sectionFour: "",
    sectionFive: "",
    sectionSix: "",
    sectionSeven: "",
    sectionEight: "",
    sectionNine: "",
    sectionTen: "",
  });
  const getSections = async () => {
    setLoading(true);
    const api1 = SectionsService.getSectionOne();
    const api2 = SectionsService.getSectionTwo();
    const api3 = SectionsService.getSectionThree();
    const api4 = SectionsService.getSectionFour();
    const api5 = SectionsService.getSectionFive();
    const api6 = SectionsService.getSectionSix();
    const api7 = SectionsService.getSectionSeven();
    const api8 = SectionsService.getSectionEight();
    const api9 = SectionsService.getSectionNine();
    const api10 = SectionsService.getSectionTen();

    Promise.all([
      api1,
      api2,
      api3,
      api4,
      api5,
      api6,
      api7,
      api8,
      api9,
      api10,
    ])
      .then(
        ([
          res1,
          res2,
          res3,
          res4,
          res5,
          res6,
          res7,
          res8,
          res9,
          res10,
         
        ]) => {
          setResult({
            sectionOne: res1.data,
            sectionTwo: res2.data,
            sectionThree: res3.data,
            sectionFour: res4.data,
            sectionFive: res5.data,
            sectionSix: res6.data,
            sectionSeven: res7.data,
            sectionEight: res8.data,
            sectionNine: res9.data,
            sectionTen: res10.data,
          });
          setLoading(false);
        }
      )
      .catch((error) => {
        setError(error);
        setLoading(false);
      });

  };

  return {
    getSections,
    result,
    loading,
    error,
  };
};
