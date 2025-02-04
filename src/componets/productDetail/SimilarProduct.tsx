import { Button, Col, Divider, Flex, Image, Row } from "antd";
import { similarProductData } from "../../data/similarProductData";
import { gray, red } from "@ant-design/colors";
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
  return (
    <div>
      <Row>
        <Col span={14}>
          <Image height={200} src={image} preview={false} />
        </Col>
        <Col span={10}>
          <Flex gap={10} vertical={true}>
            <div>
              <Image
                src="https://winecellar.vn/wp-content/themes/winecellarvn/assets/icons/svg/pa_giong-nho.svg"
                preview={false}
              />
              <span>{grapeVariety}</span>
            </div>
            <div>
              <Image
                src="https://winecellar.vn/wp-content/themes/winecellarvn/assets/icons/svg/pa_loai-vang.svg"
                preview={false}
              />
              <span>{wineType}</span>
            </div>
            <div>
              <Image
                src="https://winecellar.vn/wp-content/themes/winecellarvn/assets/icons/svg/pa_nha-san-xuat.svg"
                preview={false}
              />
              <span>{producer}</span>
            </div>
            <div>
              <Image
                width={25}
                src="https://winecellar.vn/wp-content/themes/winecellarvn/assets/icons/svg/pa_quoc-gia.svg"
                preview={false}
              />
              <span>{origin}</span>
            </div>
            <div>
              <Image
                width={25}
                src="https://winecellar.vn/wp-content/themes/winecellarvn/assets/icons/svg/pa_nong-do.svg"
                preview={false}
              />
              <span>{abv}</span>
            </div>
          </Flex>
        </Col>
      </Row>
      <h2 style={{ color: red[8] }}>{name}</h2>
      <Flex justify="space-between">
        <strong>
          <span style={{ color: red[8] }}>
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
