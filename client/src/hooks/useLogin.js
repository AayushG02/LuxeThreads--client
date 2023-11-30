import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userReducer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

export const useLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const login = async (email, password) => {
    setLoading(true);
    try {
      const res = await axios.post(
        import.meta.env.VITE_API_URL + "/user/login",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.status === 200) {
        localStorage.setItem("user", JSON.stringify(res.data));

        dispatch(setUser(res.data));

        setLoading(false);
        setError(false);

        if (!loading && !error) {
          toast.success("Login successful!", {
            duration: 2000,
          });
          navigate("/");
        }
      }
    } catch (error) {
      setLoading(false);
      setError(error);
      toast.error(error.response.data.error || "An error occurred!", {
        duration: 2000,
      });
    }
  };

  return { login, loading, error };
};
