"use client";
import { useState, type ChangeEvent } from "react";

const useContactForm = () => {
  const [values, setValues] = useState({
    email: "",
    name: "",
    message: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const field = e.currentTarget.id as keyof typeof values;
    setValues((prevState) => {
      return {
        ...prevState,
        [field]: e.currentTarget.value,
      };
    });
  };

  return { values, handleChange };
};

export default useContactForm;
