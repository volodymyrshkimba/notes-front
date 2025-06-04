import { ClipLoader } from "react-spinners";
import css from "./Loader.module.css";
import { useEffect, useState } from "react";

const Loader = () => {
  const [message, setMessage] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMessage(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={css.loaderWrapper}>
      <ClipLoader />
      {message && (
        <p className={css.message}>
          If the loading takes longer than expected, please be patient — it’s
          running on a free server and may need extra time to wake up.
        </p>
      )}
    </div>
  );
};

export default Loader;
