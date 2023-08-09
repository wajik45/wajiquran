const Error = ({ error }) => {
  return (
    <div className="error-wrapper">
      <h3>{error.message}</h3>
    </div>
  );
};

export default Error;
