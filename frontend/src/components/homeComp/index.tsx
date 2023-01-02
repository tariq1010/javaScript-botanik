import { HomeCompWrapper } from "./element";
import { Footer, Navbar } from "components";
import Header from "./header";
import MiddleSection from "./middleSection";
import LastSection from "./lastSection";
import { GetSectionsHook } from "hooks/allSectionsHook";
import { useEffect } from "react";
import { Loader } from "components/common";

function HomeComp() {
 const {getSections,result,loading}= GetSectionsHook()
 useEffect(()=>{
  getSections()
 },[])

  return (
    <HomeCompWrapper>
      {loading && <Loader/>}
      <Navbar />
      <Header  data={result.sectionOne} sectionTwo={result.sectionTwo} sectionThree={result.sectionThree} sectionFour={result.sectionFour}/>
      <MiddleSection  data={result.sectionFive} sectionSix={result.sectionSix} sectionSeven={result.sectionSeven} carousel={result.sectionEight} />
      <LastSection  data={result.sectionNine} sectionTen={result.sectionTen}  />
      <Footer />
    </HomeCompWrapper>
  );
}

export default HomeComp;
