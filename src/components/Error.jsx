const Error = ({ error }) => {
  return (
    <div className="error-wrapper">
      <h4>Error, {error.message}</h4>
    </div>
  );
};

export default Error;
