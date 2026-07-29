const ErrorMessage = ({ message }) => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <h2 className="text-2xl font-semibold text-red-500">
        {message}
      </h2>
    </div>
  );
};

export default ErrorMessage;