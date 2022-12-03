import environment from "enviornment";

const validate = (value: any) => {
  console.log("values", value.balance, value);
  const errors: any = {};

  var result = value.num - Math.floor(value.num) !== 0;
  if (!value.num) {
    errors.num = "Please enter number";
  }
  // else if (result) {
  //   errors.num = "Number cannot be in decimal"
  // }
  else if (value.num < 1) {
    errors.num = "Number cannot be less than 1";
  }
  // else if (value.num > environment.PER_TXN_LIMIT) {
  //   errors.num = `Number cannot be greater than ${environment.PER_TXN_LIMIT}`
  // }
  // else if (value.num > value.nftleft) {
  //   errors.num = 'Number is greater than nfts left in phase'
  // }
  if (value.num > environment.PER_TXN_LIMIT) {
    errors.num = `Number cannot be greater than ${environment.PER_TXN_LIMIT}`;
  }

  // accountBalance > num * botanikData?.mintFee
  console.log(
    "valid",
    Number(value.num) * Number(value.nftFee) >= Number(value.balance)
  );
  if (value.num * Number(value.nftFee) >= Number(value.balance)) {
    errors.num = `Insufficient Funds`;
  }
  return errors;
};

export default validate;
