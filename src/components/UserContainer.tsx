import useUserData from "../hooks/useUserData";
import UserList from "./UserList";

const UserContainer = () => {
  const { data, loading, error } = useUserData();
  //   const props = { data, loading, error };
  //   return <UserList {...props} />;
  return <UserList data={data} loading={loading} error={error} />;
};

export default UserContainer;
