import { Breadcrumb, Button, Col, Divider, Row } from "antd";
import { ProductCarousel } from "../componets/productDetail/ProductCarousel";
import { ProductInfo } from "../componets/productDetail/ProductInfo";
import { Address, Contact } from "../componets/productDetail/Contact";
import { PriceCart } from "../componets/productDetail/PriceCart";
import { red } from "@ant-design/colors";
import DOMPurify from "dompurify";
import { productDescriptionHtml } from "../data/productDescriptinHtml";
import { useState } from "react";
import { FAQ } from "../componets/productDetail/FAQ";
import { SimilarProduct } from "../componets/productDetail/SimilarProduct";
const Decription = () => {
  const clean = DOMPurify.sanitize(productDescriptionHtml);
  const [showMore, setshowMore] = useState(false);
  return (
    <div style={{ marginTop: "40px", padding: "0 150px" }}>
      <Divider style={{ borderColor: red[8] }} variant="dashed">
        <h1
          style={{
            color: red[8],
            textAlign: "center",
            fontWeight: 400,
          }}
        >
          THÔNG TIN SẢN PHẨM
        </h1>
      </Divider>
      <div
        style={{
          maxHeight: showMore ? "none" : "450px",
          overflow: "hidden",
          position: "relative",
          transition: "max-height 0.3s ease-in-out",
        }}
      >
        <div dangerouslySetInnerHTML={{ __html: clean }}></div>
        {!showMore && (
          <div
            style={{
              position: "absolute",
              bottom: "0",
              left: "0",
              right: "0",
              height: "50px", // Adjust blur height
              background: "rgba(255, 255, 255, 0.8)",
              backdropFilter: "blur(10px)", // Blur effect
            }}
          ></div>
        )}
        <Button
          onClick={() => setshowMore(!showMore)}
          style={{
            fontWeight: "bold",
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            bottom: 5,
          }}
        >
          {showMore ? "SHOW LESS" : "SHOW MORE"}
        </Button>
      </div>
    </div>
  );
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
      <Col span={12} style={{ padding: "20px" }}>
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
  const breadcrumbData = [
    { title: "Trang chủ" },
    { title: "Rượu mạnh" },
    { title: "Rượu Whisky Single Malt" },
  ];
  return (
    <div style={{ backgroundColor: "white", padding: "20px" }}>
      <Breadcrumb items={breadcrumbData} />
      <Detail />
      <Decription />
      <FAQ />
      <SimilarProduct />
    </div>
  );
};
