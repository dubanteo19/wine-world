import { Button, Col, Form, Image, Input, Row } from "antd";
interface LoginForm {
  email: string;
  password: string;
}
export const Login = () => {
  return (
    <Row style={{ padding: "80px 220px" }}>
      <Col span={12}>
        <Image
          width={500}
          preview={false}
          src="https://cdn.tgdd.vn/2022/10/banner/TGDD-540x270.png"
        />
      </Col>
      <Col span={12}>
        <Form<LoginForm>
          name="login"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{
            maxWidth: 500,
            padding: "40px 20px",
            borderRadius: "10px",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            backgroundColor: "rgba(255, 255, 255, 1)",
          }}
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <h2 style={{ textAlign: "center" }}>Đăng nhập</h2>
          <Form.Item<LoginForm>
            label="Email"
            name="email"
            rules={[
              {
                type: "email",
                required: true,
                message: "Vui lòng nhập email!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item<LoginForm>
            label="Mật khẩu"
            name="password"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập mật khẩu",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item label={null}>
            <Button type="primary" htmlType="submit">
              Đăng nhập
            </Button>
          </Form.Item>
          <p style={{ textAlign: "center" }}>
            Chưa có tài khoản? <a href="/register">Đăng ký</a>
          </p>
        </Form>
      </Col>
    </Row>
  );
};
