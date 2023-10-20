import { useRouter } from "next/router";

const ClientsProductPage = () => {
  const router = useRouter();

  const loadProjectHandler = () => {
    router.push("/clients/max/projectA");
  };

  return (
    <div>
      <h1>The projects of a given Client</h1>
      <button onClick={loadProjectHandler}>Load project A</button>
    </div>
  );
};

export default ClientsProductPage;
