import { red } from "@ant-design/colors";
import { Col, Divider, Flex, Rate, Row } from "antd";
const Policies = () => {
  const policiesData = [
    "Giá sản phẩm đã bao gồm VAT",
    "Phí giao hàng tùy theo từng khu vực.",
    "Đơn hàng từ 1.000.000 vnđ miễn phí giao hàng.",
  ];
  return (
    <div
      style={{
        borderRadius: "10px",
        padding: "5px",
        background: "rgba(0, 0, 0, 0.05)",
        fontSize: "18px",
        marginTop: 20,
      }}
    >
      <ul>
        {policiesData.map((item) => (
          <li>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
const RatingOverall = () => {
  return (
    <Flex gap="20px" align="center">
      <Rate value={5} />
      <div>
        <p>5/5 - (1 bình chọn)</p>
      </div>
    </Flex>
  );
};
interface WinePropItemProps {
  icon: string;
  name: string;
  value: string;
}
const WinePropItem: React.FC<WinePropItemProps> = ({ icon, name, value }) => {
  return (
    <Flex gap={10}>
      <img src={icon} width={30} alt="" />
      <div>
        <span style={{ fontWeight: "bold" }}>{name}</span>
        <br />
        <span>{value}</span>
      </div>
    </Flex>
  );
};
const WineProperties = () => {
  const wineProperties: WinePropItemProps[] = [
    {
      icon: "https://winecellar.vn/wp-content/themes/winecellarvn/assets/icons/svg/pa_giong-nho.svg",
      name: "GIỐNG NHO",
      value: "Blend",
    },
    {
      icon: "https://winecellar.vn/wp-content/themes/winecellarvn/assets/icons/svg/pa_loai-vang.svg",
      name: "LOẠI VANG",
      value: "Rượu Vang Đỏ",
    },
    {
      icon: "https://winecellar.vn/wp-content/themes/winecellarvn/assets/icons/svg/pa_nha-san-xuat.svg",
      name: "NHÀ SẢN XUẤT",
      value: "Opus One Winery",
    },
    {
      icon: "https://winecellar.vn/wp-content/themes/winecellarvn/assets/icons/svg/pa_quoc-gia.svg",
      name: "QUỔC GIA",
      value: "Vang Mỹ",
    },
    {
      icon: "https://winecellar.vn/wp-content/themes/winecellarvn/assets/icons/svg/pa_nong-do.svg",
      name: "Nồng độ",
      value: "14.5% ABV*",
    },
    {
      icon: "https://winecellar.vn/wp-content/themes/winecellarvn/assets/icons/svg/pa_dung-tich.svg",
      name: "Dung tích",
      value: "750ml",
    },
  ];
  return (
    <div>
      <Row gutter={[30, 20]}>
        {wineProperties.map((item, index) => (
          <Col span={8} key={index}>
            <WinePropItem {...item} />
          </Col>
        ))}
      </Row>
      <Divider variant="dotted" style={{ borderColor: red[8] }} />
      <div>
        <strong>Niên vụ</strong>
        <span
          style={{
            backgroundColor: red[8],
            fontWeight: "bold",
            color: "white",
            fontSize: "18px",
            padding: "10px 20px",
            borderRadius: "5px",
            marginLeft: "20px",
          }}
        >
          2018
        </span>
      </div>
      <Policies />
    </div>
  );
};
export const ProductInfo = () => {
  return (
    <div>
      <h1 style={{ color: red[8], marginBottom: 0 }}>
        Rượu Whisky Glengoyne 10 Years Old
      </h1>
      <RatingOverall />
      <p>
        Overture 2018 thể hiện hương thơm của trái cây chín sẫm màu với tông màu
        tinh tế của các loại thảo mộc khô. Vị rượu đem tới cảm giác ngon miệng
        với hương vị nhiều lớp của cà phê espresso, dâu tây và tử đinh hương, để
        lại hậu vị lâu dài, thanh lịch với kết cấu satin mượt mà, quyến tốt
      </p>
      <WineProperties />
    </div>
  );
};
