const validate = (value: any) => {

  const errors: any = {};

  var result = (value.num - Math.floor(value.num)) !== 0;
  if (!value.num) {
    errors.num = 'Please enter number';
  }
  else if (result) {
    errors.num = "Number cannot be in decimal"
  }
  else if (value.num < 1) {
    errors.num = 'Number cannot be less than 1';
  }
  else if (value.num > 10) {
    errors.num = 'Number cannot be greater than 10'
  }
  // else if (value.num > value.nftleft) {
  //   errors.num = 'Number is greater than nfts left in phase'
  // }

  return errors;
}

export default validate