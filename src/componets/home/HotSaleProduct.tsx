import { Button, Card, Col, Row } from "antd";
import { productData } from "../../data/productData";
import { red } from "@ant-design/colors";

interface Props {
  id: number;
  name: string;
  image: string;
  price: number;
}
const HotSaleProductCard: React.FC<Props> = ({ id, name, image, price }) => {
  return (
    <Card hoverable cover={<img alt="example" src={image} />}>
      <Card.Meta
        title={
          <span style={{ fontSize: "20px", whiteSpace: "normal" }}>{name}</span>
        }
        style={{ textAlign: "center" }}
        description={
          <p
            style={{
              fontSize: "20px",
              color: red[8],
              fontWeight: 550,
              margin: "10px 0",
            }}
          >
            {price}
          </p>
        }
      />
      <Button
        size="large"
        style={{ width: "100%", fontWeight: "bold" }}
        type="primary"
      >
        Thêm vào giỏ hàng
      </Button>
    </Card>
  );
};
export const HotSaleProduct = () => {
  const data = productData;
  return (
    <div>
      <h1
        style={{
          margin: 0,
          fontWeight: 400,
          textAlign: "center",
          color: red[8],
        }}
      >
        SẢN PHẨM BÁN CHẠY
      </h1>
      <Row style={{ marginTop: "30px" }} gutter={[10, 10]}>
        {data &&
          data.map((item, index) => (
            <Col key={item.id + index} span={6}>
              <HotSaleProductCard {...item} />
            </Col>
          ))}
      </Row>
    </div>
  );
};
