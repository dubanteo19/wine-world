import { red } from "@ant-design/colors";
import { Card, Col, Row } from "antd";
import Meta from "antd/es/card/Meta";
import { useNavigate } from "react-router-dom";
import { brandData } from "../../data/brandData";
interface Props {
  image: string;
  title: string;
  target: string;
}
const BrandCard: React.FC<Props> = ({ image, title, target }) => {
  const navigate = useNavigate();
  return (
    <Card
      style={{ width: 260 }}
      hoverable
      onClick={() => {
        navigate(target);
      }}
      cover={<img alt="example" src={image} />}
    >
      <Meta
        title={
          <span
            style={{
              fontSize: "20px",
              fontWeight: 550,
              whiteSpace: "normal",
            }}
          >
            {title}
          </span>
        }
        style={{
          textAlign: "center",
          height: "55px",
        }}
      />
    </Card>
  );
};
export const BrandList = () => {
  const data = brandData;
  return (
    <div>
      <div
        style={{
          textAlign: "center",
          color: red[8],
        }}
      >
        <h1 style={{ margin: 0, fontWeight: 400 }}>KHÁM PHÁ THƯƠNG HIỆU</h1>
        <p style={{ margin: 5, fontSize: 18 }}>
          <strong>WINEWORLD</strong> tự hào là đại diện độc quyền nhập khẩu và
          phân phối sản phẩm từ một số nhà sản xuất rượu vang tốt nhất thế giới
          tại Việt Nam.
        </p>
      </div>
      <Row
        style={{
          marginTop: "30px",
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)", // 5 equal columns
          gap: 22, // Spacing between columns
        }}
      >
        {data.map((item, index) => (
          <Col key={index}>
            <BrandCard
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
