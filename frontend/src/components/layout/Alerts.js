import React, { useEffect } from "react";
import { withAlert } from "react-alert";

const Alert = (props) => {
  useEffect(() => {
    props.alert.error("It Works");
  }, [""]);

  return (
    <>
      <p>Alert</p>
    </>
  );
};

export default withAlert(Alert);
