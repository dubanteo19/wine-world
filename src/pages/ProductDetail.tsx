import { Breadcrumb, Col, Row } from "antd";
import { ProductCarousel } from "../componets/productDetail/ProductCarousel";
import { ProductInfo } from "../componets/productDetail/ProductInfo";
import { Address, Contact } from "../componets/productDetail/Contact";
import { PriceCart } from "../componets/productDetail/PriceCart";

const Decription = () => {
  return <div></div>;
};
const Detail = () => {
  const images = [
    "https://winecellar.vn/wp-content/uploads/2024/03/glenallachie-10-batch-11.jpg",
    "https://whisky.vn/wp-content/uploads/2024/05/springbank-10-1.jpg",
  ];
  return (
    <Row gutter={[32, 10]}>
      <Col span={6}>
        <ProductCarousel images={images} />
      </Col>
      <Col span={12}>
        <ProductInfo />
        <PriceCart />
      </Col>
      <Col span={6}>
        <Contact />
        <Address style={{ marginTop: 20 }} />
      </Col>
    </Row>
  );
};
export const ProductDetail = () => {
  return (
    <div style={{ backgroundColor: "white", padding: "20px" }}>
      <Breadcrumb
        items={[
          { title: "Trang chủ" },
          { title: "Rượu mạnh" },
          { title: "Rượu Whisky Single Malt" },
        ]}
      />
      <Detail />
      <Decription />
    </div>
  );
};
