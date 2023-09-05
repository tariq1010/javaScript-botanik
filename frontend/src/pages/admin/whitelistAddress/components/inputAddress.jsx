import React, { useState } from "react";
import InputField from "../../../../components/input fields/inputField";
import { setAddresses } from "../../../../store/redux/slices/addressesSlice";
import { useAppDispatch, useAppSelector } from "../../../../store/store";

const InputAddresses = () => {
  const dispatch = useAppDispatch();
  const { whiteList } = useAppSelector((state) => state.addresses);
  const [whitelist, setWhitelist] = useState("");

  const handleInputChange = (target) => {
    const { name, value } = target;
    setWhitelist(value);
  };

  const saveAddresses = () => {
    dispatch(setAddresses(whitelist));
    setWhitelist("");
  };

  return (
    <div className="input-addresses-container">
      <div className="inputFields" style={{ color: "white" }}>
        <InputField
          name="whiteList"
          headerLabel="Add addresses"
          value={whitelist}
          setValue={(e) => handleInputChange(e)}
          label="whitelist "
          description="Press Enter key to save address"
          maxLength={100}
          onKeyPress={saveAddresses}
        />
      </div>
    </div>
  );
};

export default InputAddresses;
