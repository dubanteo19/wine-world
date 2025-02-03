import { red } from "@ant-design/colors";
import { Col, Row } from "antd";

interface Props {
  style?: React.CSSProperties;
}

export const Address: React.FC<Props> = ({ style }) => {
  return (
    <div
      style={{
        ...style,
        backgroundColor: "rgba(0, 0, 0, 0.05)",
        padding: 20,
        borderRadius: "10px",
      }}
    >
      <Row gutter={[36, 0]}>
        <Col span={2}>
          <img src="https://winecellar.vn/wp-content/uploads/2022/04/icon_shop.png" />
        </Col>
        <Col style={{ fontSize: 18 }} span={20}>
          <span>HỆ THỐNG CỬA HÀNG</span>
          <div style={{ fontSize: 16, color: red[8] }}>
            <p style={{ color: red[8], margin: "10px 0" }}>
              188 Nguyễn Văn Thủ, Quận 1
            </p>
            <p style={{ color: red[8], margin: "10px 0" }}>
              253 Nam Kì Khởi Nghĩa, Quận 3
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export const Contact: React.FC<Props> = ({ style }) => {
  return (
    <div
      style={{
        ...style,
        backgroundColor: "rgba(0, 0, 0, 0.05",
        padding: 20,
        borderRadius: "10px",
      }}
    >
      <Row gutter={[36, 0]}>
        <Col span={2}>
          <img src="https://winecellar.vn/wp-content/uploads/2022/04/icon_hotline.png" />
        </Col>
        <Col style={{ fontSize: 18 }} span={20}>
          <span style={{}}>HOTLINE</span>
          <div style={{ fontSize: 20, color: red[8] }}>
            <p style={{ color: red[8], margin: "10px 0" }}>0889.288.88</p>
            <p style={{ color: red[8], margin: "10px 0" }}>0891.891.28</p>
            <p style={{ color: red[8], margin: "10px 0" }}>0988.290.92</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};
