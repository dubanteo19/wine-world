import { red } from "@ant-design/colors";
import { Card, Col, Row } from "antd";
import Meta from "antd/es/card/Meta";
import { useNavigate } from "react-router-dom";
import { catalogData } from "../../data/catalogData";
interface Props {
  title: string;
  image: string;
  target: string;
}
const CatalogCard: React.FC<Props> = ({ title, image, target }) => {
  const navigate = useNavigate();
  return (
    <Card
      hoverable
      onClick={() => {
        navigate(target);
      }}
      cover={<img alt="example" src={image} />}
    >
      <Meta
        title={<span style={{ fontSize: "20px" }}>{title}</span>}
        style={{ textAlign: "center" }}
      />
    </Card>
  );
};
export const Catalog = () => {
  const data = catalogData;
  return (
    <div>
      <div
        style={{
          textAlign: "center",
          color: red[8],
          fontWeight: 400,
          marginBottom: "30px",
        }}
      >
        <h1 style={{ margin: "0", fontWeight: 500 }}>
          DANH MỤC SẢN PHẨM ĐA DẠNG{" "}
        </h1>
        <h1 style={{ margin: "0", fontWeight: 500 }}>VÔ VÀN KHÁM PHÁ</h1>
      </div>
      <Row gutter={[32, 32]}>
        {data.map((item, index) => (
          <Col span={6} key={index}>
            <CatalogCard
              title={item.title}
              image={item.image}
              target={item.target}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};
