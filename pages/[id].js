import fs from "fs/promises";
import path from "path";

const ProductDetailsPage = (props) => {
  const { product } = props;
  return (
    <>
      <h1>{product.title}</h1>
      <h1>{product.description}</h1>
    </>
  );
};

export async function getStaticProps(context) {
  const { params } = context;

  const productId = params.id;

  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  const product = data.products.find((product) => product.id === productId);

  return {
    props: {
      product,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "p1" } },
      { params: { id: "p2" } },
      { params: { id: "p3" } },
    ],
    fallback: false,
  };
}

export default ProductDetailsPage;
