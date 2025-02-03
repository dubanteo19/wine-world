import { gray, red } from "@ant-design/colors";
import { Col, Image, Row, Space } from "antd";
import { Link } from "react-router-dom";
const Title: React.FC<{ content: string }> = ({ content }) => (
  <h2
    style={{
      color: red[8],
      fontWeight: 400,
      fontSize: "22px",
      textAlign: "center",
    }}
  >
    {content}
  </h2>
);
export const Footer = () => {
  const infoLinks = [
    { text: "GIỚI THIỆU CÔNG TY", target: "_" },
    { text: "CHÍNH SÁCH", target: "_" },
    { text: "HƯỚNG DẪN MUA HÀNG", target: "_" },
    { text: "CHÍNH SÁCH GIAO HÀNG", target: "_" },
    { text: "CÂU HỎI THƯỜNG GẶP", target: "_" },
  ];
  const catalogLinks = [
    { text: "RƯỢU VANG", target: "_" },
    { text: "RƯỢU VANG PHÁP", target: "_" },
    { text: "RƯỢU VANG Ý", target: "_" },
    { text: "RƯỢU VANG MỸ", target: "_" },
    { text: "RƯỢU VANG ÚC", target: "_" },
  ];
  const giftLinks = [
    { text: "QUÀ TẶNG DOANH NGHIỆP", target: "_" },
    { text: "QUÀ TẶNG DỊP LỄ", target: "_" },
  ];
  return (
    <div
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        padding: "20px 80px",
      }}
    >
      <Row gutter={[60, 16]}>
        <Col span={6}>
          <Title content="THÔNG TIN" />
          <div>
            {infoLinks.map((item, index) => (
              <Link
                style={{ color: "black", fontSize: "16px" }}
                to={item.target}
                key={index}
              >
                <p style={{ textAlign: "center" }}>{item.text}</p>
              </Link>
            ))}
          </div>
        </Col>
        <Col span={6}>
          <Title content="DANH MỤC RƯỢU" />
          <div>
            {catalogLinks.map((item, index) => (
              <Link
                style={{ color: "black", fontSize: "16px" }}
                to={item.target}
                key={index}
              >
                <p style={{ textAlign: "center" }}>{item.text}</p>
              </Link>
            ))}
          </div>
        </Col>
        <Col span={6}>
          <Title content="QUÀ TẶNG" />
          <div>
            {giftLinks.map((item, index) => (
              <Link
                style={{ color: "black", fontSize: "16px" }}
                to={item.target}
                key={index}
              >
                <p style={{ textAlign: "center" }}>{item.text}</p>
              </Link>
            ))}
          </div>
        </Col>
        <Col span={6}>
          <Title content="CHỨNG NHẬN" />
          <Space>
            <Image
              preview={false}
              src="https://winecellar.vn/wp-content/uploads/2021/10/image-2.png"
            />
            <Image
              preview={false}
              src="https://winecellar.vn/wp-content/uploads/2021/07/certificate-3.png?ID=4b8a8ee3-256d-4e67-abbb-e8d77ebe600d"
            />
          </Space>
        </Col>
      </Row>
    </div>
  );
};
