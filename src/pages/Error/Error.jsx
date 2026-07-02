import "./Error.css";

function Error() {
  return (
    <div className="error-container">
      <h1>Page Not Found {":("}</h1>
      <p>
        Sorry, but we could not find the page you were looking for - please make
        sure the URL is typed correctly and try again.
      </p>
    </div>
  );
}

export default Error;
