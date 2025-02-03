import { Image } from "antd";

interface Props {
  image: string;
  width?: number;
}
export const Banner: React.FC<Props> = ({ image, width }) => {
  return (
    <Image
      width={width}
      style={{ borderRadius: "10px" }}
      src={image}
      preview={false}
    />
  );
};
