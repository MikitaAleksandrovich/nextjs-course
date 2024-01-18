import classes from "./comment-list.module.css";

function CommentList(props) {
  const { items } = props;

  console.log("items", items);

  return (
    <ul className={classes.comments}>
      {items?.map((item) => (
        <li>
          <p>{item.text}</p>
          <div>
            By <address>{item.name}</address>
          </div>
        </li>
      ))}
      arvarev
    </ul>
  );
}

export default CommentList;
