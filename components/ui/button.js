import Link from "next/link";

import classes from "./button.module.css";

const Button = ({ link, children, onClick }) => {
  if (link) {
    return (
      <Link className={classes.btn} href={link}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes.btn}>
      {children}
    </button>
  );
};

export default Button;
