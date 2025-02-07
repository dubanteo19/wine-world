import { red } from "@ant-design/colors";
import { Button, Flex, InputNumber } from "antd";
import { useState } from "react";
import { FacebookFilled, PhoneFilled, PhoneOutlined } from "@ant-design/icons";
import { Color } from "antd/es/color-picker";
import { ButtonColorType } from "antd/es/button";
interface Props {
  quantity: number;
  setquantity: React.Dispatch<React.SetStateAction<number>>;
}
const QuantityButtons: React.FC<Props> = ({ quantity, setquantity }) => {
  return (
    <Flex
      align="center"
      justify="center"
      style={{ border: "1px solid gray", borderRadius: "5px" }}
    >
      <Button
        onClick={() => {
          if (quantity > 1) {
            setquantity(quantity - 1);
          }
        }}
        style={{
          border: "none",
        }}
      >
        -
      </Button>
      <InputNumber
        controls={false}
        min={1}
        value={quantity}
        onChange={(value) => {
          if (value) {
            setquantity(value);
          }
        }}
        style={{
          width: "40px",
          margin: "0 10px",
          outline: "none",
          border: "none",
          WebkitAppearance: "textfield",
          MozAppearance: "textfield",
          appearance: "textfield",
        }}
        type="number"
      />
      <Button
        onClick={() => {
          setquantity(quantity + 1);
        }}
        style={{
          border: "none",
        }}
      >
        +
      </Button>
    </Flex>
  );
};
interface MyButtonProps {
  key: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  color?: ButtonColorType;
}
export const PriceCart = () => {
  const [quantity, setquantity] = useState(1);
  const buttonsConfig: MyButtonProps[] = [
    { key: "phone", icon: <PhoneFilled />, color: "primary" },
    { key: "facebook", icon: <FacebookFilled />, color: "blue" },
    { key: "zalo", children: "ZALO", color: "geekblue" },
  ];
  return (
    <div style={{ marginTop: "20px" }}>
      <p style={{ fontSize: "20px", fontWeight: "bold", color: red[8] }}>
        1430000
      </p>
      <Flex gap={20}>
        <QuantityButtons quantity={quantity} setquantity={setquantity} />
        <Button
          style={{ fontWeight: "bold", fontSize: 16, padding: "20px" }}
          type="primary"
        >
          THÊM VÀO GIỎ HÀNG
        </Button>
      </Flex>
      <Flex style={{ marginTop: "20px" }} gap={20}>
        {buttonsConfig.map((item) => {
          return (
            <Button
              style={{
                fontWeight: "bold",
                fontSize: 20,
                padding: "22px",
                width: "120px",
              }}
              variant="solid"
              key={item.key}
              color={item.color}
            >
              {item.icon}
              {item.children}
            </Button>
          );
        })}
      </Flex>
    </div>
  );
};
