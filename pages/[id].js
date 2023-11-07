import fs from "fs/promises";
import path from "path";

const ProductDetailsPage = (props) => {
  const { product } = props;

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>{product.title}</h1>
      <h1>{product.description}</h1>
    </>
  );
};

async function getData() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return data;
}

export async function getStaticProps(context) {
  const { params } = context;

  const productId = params.id;

  const data = await getData();

  const product = data.products.find((product) => product.id === productId);

  return {
    props: {
      product,
    },
  };
}

export async function getStaticPaths() {
  const data = await getData();

  const ids = data.products.map((product) => product.id);

  const pathsWithParams = ids.map((id) => ({ params: { id: id } }));
  return {
    paths: pathsWithParams,
    fallback: true,
  };
}

export default ProductDetailsPage;
