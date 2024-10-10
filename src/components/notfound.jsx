  import React from 'react';
  import './notfound.css';

  const NotFound = () => {
    return (
      <div className="not-found">
        <div className="not-found-content">
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <p>Sorry, the page you are looking for does not exist.</p>
          <p>Please check the URL or navigate back to the homepage.</p>
          <a href="/" className="home-button">Go to Homepage</a>
        </div>
      </div>
    );
  };

  export default NotFound;
