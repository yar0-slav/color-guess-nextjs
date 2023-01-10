function SucessMessage() {
  return (
    <div
      className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:text-green-400"
      role="alert"
    >
      <span className="font-medium">Correct answer!</span> 
    </div>
  );
}

function ErrorMessage() {
  return (
    <div
      className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:text-red-400"
      role="alert"
    >
      <span className="font-medium">Wrong answer.</span>
    </div>
  );
}

export { SucessMessage, ErrorMessage };
