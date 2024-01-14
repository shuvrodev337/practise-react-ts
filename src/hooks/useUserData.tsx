import { useEffect, useState } from "react";
const useUserData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const url = "https://jsonplaceholder.typicode.com/users";
  const controller = new AbortController();
  const signal = controller.signal;
  const getUsers = async () => {
    setLoading(true);
    try {
      const res = await fetch(url, { signal });
      const resData = await res.json();
      setData(resData);
      setLoading(false);
    } catch (error) {
      console.log(error?.message);
      setError(true);
      setLoading(false);
    }
  };
  useEffect(() => {
    getUsers();
    return () => {
      controller.abort();
    };
  }, []);
  return { data, loading, error };
};
export default useUserData;
