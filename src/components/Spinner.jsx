import React, { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "100px auto",
};

const Spinner = ({ loading }) => {
  const [isLoading, setIsLoading] = useState(loading);

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [loading]);

  return (
    <ClipLoader
      color="#4338ca"
      loading={isLoading}
      cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Spinner;
