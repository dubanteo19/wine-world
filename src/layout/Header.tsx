import { ConfigProvider, Flex, Image, Input, Menu, Space } from "antd";
import SubMenu from "antd/es/menu/SubMenu";
import { Link } from "react-router-dom";
import {
  CaretDownOutlined,
  GiftOutlined,
  HeartFilled,
  PercentageOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { red } from "@ant-design/colors";
const LogoBar = () => {
  return (
    <Flex
      align="center"
      justify="space-between"
      style={{ padding: "10px", backgroundColor: red[9] }}
    >
      <Image
        preview={false}
        width={80}
        src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
      />
      <Input.Search
        placeholder="Hãy thử 'Vang Pháp' xem sao!"
        style={{ width: "700px" }}
        allowClear
        size="large"
        enterButton
      />
      <Space style={{ color: "white" }} size="large">
        <HeartFilled style={{ fontSize: "25px" }} />
        <ShoppingCartOutlined style={{ fontSize: "25px" }} />
        <Link style={{ color: "white" }} to="/login">
          ĐĂNG NHẬP
        </Link>
      </Space>
    </Flex>
  );
};
export const Header = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgElevated: red[9],
        },
        components: {
          Menu: {
            colorText: "white",
          },
        },
      }}
    >
      <div style={{ width: "100%" }}>
        <LogoBar />
        <Menu mode="horizontal" style={{ backgroundColor: red[8] }}>
          <Menu.Item key="home">
            <Link to="/">TRANG CHỦ</Link>
          </Menu.Item>
          <SubMenu
            key={"sub1"}
            title="QUÀ TẶNG"
            icon={<GiftOutlined />}
            expandIcon={<CaretDownOutlined />}
          >
            <Menu.Item key={1}>
              <Link to="/">Quà tặng doanh nghiệp</Link>
            </Menu.Item>
            <Menu.Item key={2}>
              <Link to="/">Quà tặng rượu mạnh</Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="wine">
            <Link to="/">RƯỢU VANG</Link>
          </Menu.Item>
          <Menu.Item key="liquor">
            <Link to="/">RƯỢU MẠNH</Link>
          </Menu.Item>
          <Menu.Item key="sale" icon={<PercentageOutlined />}>
            <Link to="/">KHUYẾN MẠI</Link>
          </Menu.Item>
          <Menu.Item key="blog">
            <Link to="/">KIẾN THỨC</Link>
          </Menu.Item>
          <Menu.Item key="contact">
            <Link to="/">LIÊN HỆ</Link>
          </Menu.Item>
        </Menu>
      </div>
    </ConfigProvider>
  );
};
