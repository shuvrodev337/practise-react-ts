import ImageAvatar from "./ImageAvatar";
import GameResult from "./GameResult";

const Profile = () => {
  return (
    <div>
      <h1 className="text-4xl ">Higher Order Example</h1>
      <div>
        <h1 className="text-3xl ">User Profile</h1>
        <ImageAvatar
          imageUrl={
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
      </div>
      <div>
        <h1 className="text-3xl ">Game result</h1>
        <GameResult />
      </div>
    </div>
  );
};

export default Profile;
