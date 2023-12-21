const UserProfile = (props) => {
  return <h1>{props.userName}</h1>;
};

export const getServerSideProps = async (context) => {
  const { params, req, res } = context;

  return {
    props: {
      userName: "Max",
    },
  };
};

export default UserProfile;
