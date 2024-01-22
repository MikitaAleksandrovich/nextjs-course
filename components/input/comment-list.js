import classes from "./comment-list.module.css";

function CommentList(props) {
  const { items } = props;

  if (!items) {
    return <div>No comments</div>;
  }

  if (!items || items.length <= 0) {
    return <div>Loading...</div>;
  }

  return (
    <ul className={classes.comments}>
      {items?.map((item) => (
        <li key={item._id}>
          <p>{item.text}</p>
          <div>
            By <address>{item.name}</address>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CommentList;
