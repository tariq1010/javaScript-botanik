import styled from "styled-components";
// import bgImg from '../../assets/images/herobg.png'
// import { motion } from "framer-motion";
import logo from "../../assets/images/logo2.png";
const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  touch-action: none;
  overflow: hidden;

  width: 100vw;
  height: 100vh;

  z-index: 50;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #d3e5d1;
  /* background-color: #003333; */
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  /* background-color: ${(props) => props.theme.body}; */
  color: ${(props) => props.theme.text};

  svg {
    width: 10vw;
    height: auto;
    overflow: visible;
    stroke-linejoin: round;
    stroke-linecap: round;

    g {
      path {
        stroke: ${(props) => props.theme.text};
      }
    }
  }

  @media (max-width: 48em) {
    svg {
      width: 20vw;
    }
  }
`;

const Text = styled.span`
  font-size: ${(props) => props.theme.fontxl};
  color: ${(props) => props.theme.text};
  padding-top: 0.5rem;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontlg};
  }
`;

const textVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      duration: 1,
      yoyo: Infinity, // repeats infinite times
      ease: "easeInOut",
    },
  },
};

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,

    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const LoaderText = styled.h5`
  color: black;
  margin-top: 2rem;
  font-weight: bold;
  font-family: "kanit";
`;

const Loader = () => {
  return (
    <Container
      initial={{
        y: 0,
        opacity: 1,
      }}
      exit={{
        y: "100%",
        opacity: 0,
      }}
      transition={{
        duration: 2,
      }}
    >
      <Text variants={textVariants} initial="hidden" animate="visible">
        <img src={logo} width={215} height={40} />
      </Text>

      <LoaderText>Loading...</LoaderText>
    </Container>
  );
};

export default Loader;
