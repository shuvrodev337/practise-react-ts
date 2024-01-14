const withBorder = (WrappedComponent) => {
  return (props) => (
    <div className="border-4 border-purple-700 rounded-full">
      <WrappedComponent {...props} />
    </div>
  );
};

export default withBorder;
