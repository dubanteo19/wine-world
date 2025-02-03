import { red } from "@ant-design/colors";
import { Card, Col, Row } from "antd";
import { blogs } from "../../data/blogData";
interface Props {
  id: number;
  title: string;
  image: string;
}
const BlogCard: React.FC<Props> = ({ id, title, image }) => {
  return (
    <Card cover={<img alt="example" src={image} />}>
      <Card.Meta
        title={
          <span style={{ fontSize: "16px", whiteSpace: "normal" }}>
            {title}
          </span>
        }
      />
    </Card>
  );
};
export const Blog = () => {
  const data = blogs;
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
        KIẾN THỨC RƯỢU VANG
      </h1>
      <Row gutter={[22, 22]} style={{ marginTop: "30px" }}>
        {data.map((item) => (
          <Col span={4}>
            <BlogCard {...item} />
          </Col>
        ))}
      </Row>
    </div>
  );
};
