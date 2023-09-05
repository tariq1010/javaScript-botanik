const validate = (values, onSubmit = true) => {
  const errors = {};

  if (values.whiteList.length < 1 && onSubmit) {
    errors.whiteList = "No saved address in whitelist";
  }

  values.whiteList.map((address, i) => {
    if (!address.startsWith("0x"))
      errors.whiteList = `Address ${i + 1} in the list should start from 0x`;
    if (address.length != 42)
      errors.whiteList = `Address ${
        i + 1
      } in the list should have 42 characters`;
  });

  /*   if (!values.blackList) {
           errors.blackList = 'blacklist address is required'
       }
   
       else if(values.blackList.length>42){
           errors.blackList = 'blackList address length should bes less than 42'
       }
   */
  return errors;
};

export default validate;
