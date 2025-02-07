import { Button, Col, Divider, Flex, Image, Rate, Row, Space } from "antd";
import { similarProductData } from "../../data/similarProductData";
import grapeVarietyIcon from "../../assets/icons/pa_giong-nho.svg";
import wineTypeIcon from "../../assets/icons/pa_loai-vang.svg";
import producerIcon from "../../assets/icons/pa_nha-san-xuat.svg";
import originIcon from "../../assets/icons/pa_quoc-gia.svg";
import abvIcon from "../../assets/icons/pa_nong-do.svg";
import { red } from "@ant-design/colors";
interface Wine {
  id: number;
  name: string;
  price: number;
  image: string;
  abv: number;
  rating: number;
  grapeVariety: string;
  producer: string;
  origin: string;
  wineType: string;
}
const ProductCard: React.FC<Wine> = (props) => {
  const {
    id,
    name,
    price,
    image,
    abv,
    rating,
    grapeVariety,
    producer,
    origin,
    wineType,
  } = props;
  const productProps = [
    { icon: grapeVarietyIcon, value: grapeVariety },
    { icon: wineTypeIcon, value: wineType },
    { icon: producerIcon, value: producer },
    { icon: originIcon, value: origin },
    { icon: abvIcon, value: abv + " % ABV*" },
  ];
  return (
    <div>
      <Row>
        <Col span={14}>
          <div>
            <Image height={200} src={image} preview={false} />
          </div>
        </Col>
        <Col span={10}>
          <Flex gap={10} vertical={true}>
            {productProps.map((item) => (
              <Space>
                <Image width={20} src={item.icon} preview={false} />
                <span>{item.value}</span>
              </Space>
            ))}
          </Flex>
        </Col>
      </Row>
      <div>
        <Rate value={rating} />
        <h2 style={{ color: red[8], height: "60px" }}>{name}</h2>
      </div>
      <Flex justify="space-between">
        <strong>
          <span style={{ color: red[8], fontSize: "20px" }}>
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(price)}
          </span>
        </strong>
        <Button type="primary">Mua ngay</Button>
      </Flex>
    </div>
  );
};
export const ProductList: React.FC<{ data: Wine[] }> = ({ data }) => {
  return (
    <Row gutter={[40, 10]}>
      {data.map((item) => (
        <Col span={6} key={item.id}>
          <ProductCard {...item} />
        </Col>
      ))}
    </Row>
  );
};
export const SimilarProduct = () => {
  const data = similarProductData;
  return (
    <div style={{ marginTop: "40px" }}>
      <Divider />
      <h2>SẢN PHẨM TƯƠNG TỰ</h2>
      <ProductList data={data} />
    </div>
  );
};
