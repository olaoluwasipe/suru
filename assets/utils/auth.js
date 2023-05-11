import axios from "axios";
import client from "../../api/client";

export const handleSignUp = async (signUpData) => {
  // e.preventDefault();
  try {
    const { data } = await client.post("/user/signup", signUpData);
    console.log(data);
    return data;
    console.log("hyhred");
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const handleSigIn = async (loginData) => {
  // e.preventDefault();
  try {
    const { data } = await client.post("/user/login", loginData);
    console.log(data);
    console.log("hyhred");
  } catch (error) {
    console.log(error);
  }
};
