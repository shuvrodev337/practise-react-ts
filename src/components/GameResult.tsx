import ImageAvatar from "./ImageAvatar";
import withBorder from "./withBorder";

//Example of Higher order component, not necessarily mandatory. we can use hooks, function instead.
// Kono akta existing component k(ex: ImageAvatar) extra kono behaviour deya jay, HOC diye. UI related/ decision making
// behaviour like user authorized/authenticated kina, esob extra behaviour add kora jay.

const UserWithBorder = withBorder(ImageAvatar); // ImageAvatar component k function hisebe pass kora hocche with props.

const GameResult = () => {
  return (
    <div className="flex gap-4 items-center">
      <ImageAvatar
        imageUrl={
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />
      <UserWithBorder
        imageUrl={
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />
      <ImageAvatar
        imageUrl={
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />
      <ImageAvatar
        imageUrl={
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />
    </div>
  );
};

export default GameResult;
