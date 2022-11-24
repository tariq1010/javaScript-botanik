import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import Home from "./pages/home";
import MintedNfts from "./pages/minted Nfts";
import { useAppDispatch, useAppSelector } from "./store/store";
import Collection from "./pages/collection";
import AdminLogin from "./components/adminLogin/adminLogin";
import Error404 from "./components/error404/error404";
import ContractFunctions from "./components/contractFunctions/contractFunctions";
import GlobalStyle from "./globalStyles";
import "bootstrap/dist/css/bootstrap.min.css";
import { RevealNft, WhiteListAddress } from "pages/admin"
import io from "socket.io-client";
import env from "./enviornment";
import { setCount } from "store/redux/slices/mintNftSlice";

let socket: any;
const ENDPOINT = env.BACKEND_BASE_URL;

const App = () => {
  const dispatch = useAppDispatch()
  const { web3 } = useAppSelector(
    (state) => state.web3Connect
  );

  useEffect(() => {
    socket = io(ENDPOINT);
  }, []);

  useEffect(() => {
    socket.on("connect_error", (err: any) => {
      console.log(`connect_error due to ${err}`);
    });
    socket &&
      socket.on("nftCount", (result: any) => {
        dispatch(setCount(result))
      });
  }, [socket]);


  return (
    <div>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/minted" element={<MintedNfts />} />
          {/* {
            web3 && accounts[0] === ownerAddress ? <Route path="/admin" element={<Admin />} /> : null
          } */}

          <Route path="/whitelist-address" element={<WhiteListAddress />} />
          <Route path="/reveal" element={<RevealNft />} />
          {web3 ? <Route path="/collection" element={<Collection />} /> : ""}

          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/*" element={<Error404 />} />
          <Route path="/contract-functions" element={<ContractFunctions />} />

          <Route path="/collection" element={<Collection />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
