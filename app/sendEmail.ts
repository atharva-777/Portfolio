import axios from "axios";

const sendEmail = async (email: string, name: string, message: string) => {
  console.log('request sent')
  return axios.post("/api", { email: email, name: name, message: message })
  .then(function (response) {
    console.log(response);
    return response;
  })
  .catch(function (error) {
    console.log(error);
    return error;
  });
  // return axios({
  //   method: "post",
  //   url: "/api",
  //   data: {
  //     email: email,
  //     name: name,
  //     message: message,
  //   },
  // });
};

export default sendEmail;
