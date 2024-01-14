const UserList = ({ data, loading, error }) => {
  if (loading && !error) {
    return <p>...Loading</p>;
  }
  if (error) {
    return <p>Something went wrong</p>;
  }
  return (
    <div>
      <h1 className="text-3xl">Users</h1>
      {data.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
        </div>
      ))}
    </div>
  );
};

export default UserList;
