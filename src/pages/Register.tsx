import { Button, Col, Form, Image, Input, Row } from "antd";
interface RegisterForm {
  email: string;
  fullName: string;
  password: string;
  confirmPassword: string;
}
export const Register = () => {
  const handleRegister = async (values: RegisterForm) => {
    console.log(values);
  };
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
        <Form<RegisterForm>
          name="register"
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
          onFinish={handleRegister}
        >
          <h2 style={{ textAlign: "center" }}>Đăng ký</h2>
          <Form.Item
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
          <Form.Item label="Họ và tên" name="fullName">
            <Input />
          </Form.Item>
          <Form.Item
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
          <Form.Item
            label="Xác nhận mật khẩu"
            name="confirmPassword"
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
              Đăng ký
            </Button>
          </Form.Item>
          <p style={{ textAlign: "center" }}>
            Đã có tài khoản? <a href="/login">Đăng nhập</a>
          </p>
        </Form>
      </Col>
    </Row>
  );
};
