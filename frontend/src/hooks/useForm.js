import { useState, useEffect } from "react";

const useVerification = (callback, validate, values) => {
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  console.log("formErr", errors, values);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  return {
    handleSubmit,
    errors,
    setErrors,
    isSubmitting,
    setIsSubmitting,
  };
};

export default useVerification;
