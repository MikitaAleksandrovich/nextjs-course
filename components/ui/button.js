import Link from "next/link";

import classes from "./button.module.css";

const Button = ({ link, children }) => (
  <Link className={classes.btn} href={link}>
    {children}
  </Link>
);

export default Button;
