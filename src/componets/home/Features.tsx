import { red } from "@ant-design/colors";
import { Col, Image, Row } from "antd";
interface Props {
  icon?: string;
  title: string;
  description: string;
}
const FeatureCard: React.FC<Props> = ({ icon, title, description }) => {
  return (
    <div
      style={{
        textAlign: "center",
        borderRadius: "15px",
        backgroundColor: "white",
        color: "black",
        padding: "20px",
        minHeight: "180px",
      }}
    >
      <Image src={icon} preview={false} width={50} />
      <h2 style={{ color: red[8], marginBottom: "5px" }}>{title}</h2>
      <p>{description}</p>
    </div>
  );
};
export const Features = () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={6}>
          <FeatureCard
            title="2000 SẢN PHẨM"
            description="Nhập khẩu & phân phối chính hãng"
            icon="https://winecellar.vn/wp-content/uploads/2022/03/champagne-1.png"
          />
        </Col>
        <Col span={6}>
          <FeatureCard
            title="Giao hàng toàn quốc"
            description="Linh hoạt giao hàng theo yêu cầu từ Khách hàng"
            icon="https://winecellar.vn/wp-content/uploads/2023/06/gh-toan-quoc.png"
          />
        </Col>
        <Col span={6}>
          <FeatureCard
            title="GIAO HÀNG NHANH (2H)"
            description="Miễn phí giao hàng tại
Hà Nội, Đà Nẵng, Nha Trang, Hồ Chí Minh, Phú Quốc"
            icon="https://winecellar.vn/wp-content/uploads/2022/03/delivery-1.png"
          />
        </Col>
        <Col span={6}>
          <FeatureCard
            title="CAM KẾT CHẤT LƯỢNG"
            description="Sản phẩm nhập nguyên chai, chính hãng,từ thương hiệu uy tín."
            icon="https://winecellar.vn/wp-content/uploads/2023/06/check-correct.png"
          />
        </Col>
      </Row>
    </div>
  );
};
