import React, { useEffect, useState } from "react";
import Header from "../../components/header/header";
import FlipCard from "../../components/flip Card/flipCard";
import { userCollectionAsync } from "../../helpers/userCollection";
import "./collection.css";
import { useAppDispatch, useAppSelector } from "../../store/store";
import {
  getNftRequest,
  clearState,
} from "../../store/redux/slices/getNftByTokenIdSlice";
import Backdrop from "../../components/backdrop/backdrop";

const Collection = () => {
  const { web3, accounts } = useAppSelector((state) => state.web3Connect);
  const [collection, setCollection] = useState([]);
  const { nft, loading } = useAppSelector((state) => state.getNft);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (web3 && accounts) {
      userCollectionAsync(accounts, setCollection);
    }
  }, [web3, accounts]);

  useEffect(() => {
    collection?.length > 0 &&
      collection?.map((items, i) => {
        return dispatch(getNftRequest(items.token_id));
      });
  }, [collection]);

  useEffect(() => {
    return () => {
      dispatch(clearState());
      setCollection([]);
    };
  }, []);

  console.log("collectioncollection", collection, nft);
  return (
    <div>
      <Header />
      <Backdrop loading={loading} />
      <div className="card-container">
        <div className="card-row">
          {nft?.length > 0 && nft?.length === collection?.length
            ? nft.map((item, i) => {
                return (
                  <div key={i}>
                    <FlipCard data={item} />
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    </div>
  );
};

export default Collection;
