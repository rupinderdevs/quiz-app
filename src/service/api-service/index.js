import Request from "./client";

export const login = async ({ data }) => {
  const resp = await Request({
    method: "post",
    API: "login.php",
    data,
  });
  return resp;
};

export const signUp =async ({data}) =>{
  const resp = await Request({
    method: "post",
    API: "signup.php",
    data,
  });
  return resp;
}

