import axios from "axios";
export const fetchProfile = async () => {
  try {
    return ({ data } = await axios.get(
      "http://kzico.runflare.run/user/profile",
      {
        headers: {
          Authorization: "Bearer sdkjfkjdfjkjdksjfjkj123kjkjksjdfkj213jkjsf",
        },
      }
    ));
  } catch (error) {
    console.log("Hello");
  }
  return false;
};
