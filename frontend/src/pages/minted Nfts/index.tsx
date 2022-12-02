import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import Backdrop from "../../components/backdrop/backdrop";
import ErrorPage from "../../components/error page/errorPage";
import { getMintedNftsRequest } from "../../store/redux/slices/getNftSlice";
import { useNavigate } from "react-router-dom";
import MainNavbar from "components/navbar";
import { MintedNftHook } from "hooks/nftHooks";
import { MintedNftWrapper } from "./mintendElement";
import { Space, Table, Tag, Image } from "antd";
import { Card } from "react-bootstrap";

const MintedNfts = () => {
  const { Column } = Table;
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const { mintedNfts, mintedLoading, mintedError, mintedErrorMessage } =
    useAppSelector((state) => state.getNfts);

  const { data, getMinted, loader } = MintedNftHook();

  const { web3, userBalance, contract, accounts } = useAppSelector(
    (state) => state.web3Connect
  );

  const [isOwner, setIsOwner] = useState(false);

  const { botanikData } = useAppSelector((state) => state.model);
  console.log("owner", isOwner, accounts);
  useEffect(() => {
    //auth && dispatch(resetcheckAuth()) && navigate("/contract-functions");
    if (accounts && botanikData?.owner) {
      (botanikData?.owner).toLowerCase() === accounts.toLowerCase() &&
        navigate("/minted");
    } else {
      navigate("/admin-login");
    }
  }, [accounts, botanikData]);

  return (
    <MintedNftWrapper>
      <MainNavbar />
<div className="overlayBg">
      <div className="attributeTable">
        <Backdrop loading={loader} />

        <Table dataSource={data?.data}>
          <Column title="Token Id" dataIndex="token_id" key="token_id" />
          <Column title="Name" dataIndex="name" key="name" />

          <Column title="Edition" dataIndex="edition" key="edition" />
          <Column
            title="Image"
            dataIndex="image"
            key="image"
            render={(image) => (
              <>
                <Image
                  src={(image || "").replace(
                    "ipfs://",
                    "https://ipfs.io/ipfs/"
                  )}
                  width={100}
                  height={100}
                />
              </>
            )}
          />
        </Table>
      </div>
      </div>
    </MintedNftWrapper>
  );
};

export default MintedNfts;
