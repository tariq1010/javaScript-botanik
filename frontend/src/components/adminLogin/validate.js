export const credentialsValidate = (values) => {
  const errors = {};

  if (!values.username) {
    errors.username = "Username is required";
  } else if (values.username.length > 8) {
    errors.username = "Username exceed the character limit";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length > 8) {
    errors.password = "Password exceed the character limit";
  }
  return errors;
};
