function Error() {
  return (
    <p className="error">
      <span>💥</span> There was an error fetching questions.
      <br />
      Run <code> npm run server</code>
    </p>
  );
}

export default Error;
