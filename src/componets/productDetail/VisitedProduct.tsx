import { Divider } from "antd";
import { similarProductData } from "../../data/similarProductData";
import { ProductList } from "./SimilarProduct";

export const VisitedProduct = () => {
  const data = similarProductData;
  return (
    <div style={{ marginTop: "40px" }}>
      <Divider />
      <h2>ĐÃ XEM GẦN ĐÂY</h2>
      <ProductList data={data} />
    </div>
  );
};
