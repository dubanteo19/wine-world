import { orange, red } from "@ant-design/colors";
import { Button, Card, Col, Image, Row } from "antd";
import Meta from "antd/es/card/Meta";
interface Props {
  title: string;
  image: string;
  time: string;
  location: string;
}
const EventCard: React.FC<Props> = ({ title, image, time, location }) => {
  return (
    <Card cover={<img alt="example" src={image} />}>
      <Meta
        title={<span style={{ fontSize: "20px" }}>{title}</span>}
        description={
          <ul>
            <li>
              <span style={{ fontSize: "20px" }}>{time}</span>
            </li>
            <li>
              <span style={{ fontSize: "20px" }}>{location}</span>
            </li>
          </ul>
        }
      />
    </Card>
  );
};
export const EventList = () => {
  const eventData = [
    {
      title: "Hanoi | Osborne Wine Tasting",
      time: "18:30, ngày 4/12/2024",
      location:
        "The Drunken Duck, Số 18 Nghách 5/2 Từ Hoa, Quảng An, Tây Hồ, Hà Nội",
      image:
        "https://winecellar.vn/wp-content/uploads/2024/11/osborne-wine-tasting-768x402.jpg",
    },

    {
      title: "Hanoi | Osborne Wine Tasting",
      time: "18:30, ngày 4/12/2024",
      location:
        "The Drunken Duck, Số 18 Nghách 5/2 Từ Hoa, Quảng An, Tây Hồ, Hà Nội",
      image:
        "https://winecellar.vn/wp-content/uploads/2024/11/osborne-wine-tasting-768x402.jpg",
    },
    {
      title: "Hanoi | Osborne Wine Tasting",
      time: "18:30, ngày 4/12/2024",
      location:
        "The Drunken Duck, Số 18 Nghách 5/2 Từ Hoa, Quảng An, Tây Hồ, Hà Nội",
      image:
        "https://winecellar.vn/wp-content/uploads/2024/11/osborne-wine-tasting-768x402.jpg",
    },
  ];
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
        SỰ KIỆN
      </h1>
      <Row gutter={[32, 32]} style={{ marginTop: "30px" }}>
        <Col span={16}>
          <Image
            src="https://winecellar.vn/wp-content/uploads/2024/12/robert-mondavi-kim-crawford.jpg"
            preview={false}
          />
        </Col>
        <Col
          style={{
            backgroundColor: orange[1],
            borderRadius: "10px",
            padding: "40px 30px",
            color: red[8],
          }}
          span={8}
        >
          <div>
            <h1
              style={{
                margin: 0,
              }}
            >
              NHA TRANG | [INVITATION ONLY] ROBERT MONDAVI & KIM CRAWFORD: WINES
              ABOVE THE CITY
            </h1>
            <ul>
              <li>
                <span style={{ fontSize: "20px" }}>
                  THỜI GIAN: 6:30 PM – 9:30 PM, NGÀY 10/12/2024
                </span>
              </li>
              <li>
                <span style={{ fontSize: "20px" }}>
                  Địa điểm: Sky Blu Lounge Nha Trang – tầng 40, 02 Nguyễn Thị
                  Minh Khai, Lộc Thọ
                </span>
              </li>
            </ul>
            <Button type="primary" size="large">
              XEM SỰ KIỆN
            </Button>
          </div>
        </Col>
      </Row>
      <Row gutter={[32, 32]} style={{ marginTop: "30px" }}>
        {eventData.map((item) => (
          <Col key={item.time} span={8}>
            <EventCard {...item} />
          </Col>
        ))}
      </Row>
    </div>
  );
};
