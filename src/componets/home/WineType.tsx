import { red } from "@ant-design/colors";
import { Col, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { wineTypeData } from "../../data/wineTypeData";
interface Props {
  image: string;
  title: string;
  target: string;
  dark?: boolean;
}
const WineTpeCard: React.FC<Props> = ({ title, image, target, dark }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(target);
      }}
      style={{
        position: "relative",
        width: 320,
        height: 200,
        backgroundPosition: "center",
        borderRadius: 15,
        backgroundImage: `url(${image})`,
      }}
    >
      <h2
        style={{
          top: "40%",
          transform: "translateY(-50%)",
          fontWeight: 550,
          color: dark ? "white" : "black",
          left: 30,
          height: "55px",
          position: "absolute",
        }}
      >
        {title.substring(0, 4)}
        <br />
        {title.substring(5)}
      </h2>
    </div>
  );
};
export const WineType = () => {
  const data = wineTypeData;
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
        LOẠI RƯỢU VANG
      </h1>
      <Row gutter={[32, 32]} style={{ marginTop: "30px" }}>
        {data.map((item, index) => (
          <Col span={6} key={index}>
            <WineTpeCard
              dark={index === 0}
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
