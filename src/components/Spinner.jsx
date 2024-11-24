import React from "react";
import { ClipLoader } from "react-spinners";

const Spinner = ({ loading }) => {
    const override = {
        display: 'block',
        margin: "100px auto",
    }
  return (
    <ClipLoader 
    color="#122D40"
    loading={loading}
    cssOverride={override}
    size={200}
    />
  );
};

export default Spinner;
