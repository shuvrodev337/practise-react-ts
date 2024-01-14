type TImageUrlPropsType = {
  imageUrl: string;
};
const ImageAvatar = ({ imageUrl }: TImageUrlPropsType) => {
  return (
    <div className="size-10 rounded-full object-contain overflow-hidden">
      <img src={imageUrl} alt="userImg" className="w-full" />
    </div>
  );
};

export default ImageAvatar;
