import { HomeCompWrapper } from "./element";
import { Footer, Navbar } from "components";
import Header from "./header";
import MiddleSection from "./middleSection";
import LastSection from "./lastSection";

function HomeComp() {
  return (
    <HomeCompWrapper>
      <Navbar />
      <Header />
      <MiddleSection />
      <LastSection />
      <Footer />
    </HomeCompWrapper>
  );
}

export default HomeComp;
