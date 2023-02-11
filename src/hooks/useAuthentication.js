import React from "react";
import { setAuthState, setAuthUser } from "../State/Slice/authSlice";
import { useDispatch } from "react-redux";
import { fetchProfile } from "./fetchProfile";
export const useAuthentication = () => {
  const dispatch = useDispatch();
  const data = fetchProfile();
  console.log(data);
  if (data.success) dispatch(setAuthUser(true));
  dispatch(setAuthState(true));
  React.useEffect(() => {
    fetchProfile();
  });
  return data.success;
};
