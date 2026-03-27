import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Flex, Form, Input } from "antd";

type FieldType = {
  username: string;
  password: string;
};

export const LoginForm = () => {
  const onFinish = (values: FieldType) => {
    console.log(values);
  };

  return (
    <Flex justify="center" align="center" style={{ minHeight: "100vh" }}>
      <Card style={{ maxWidth: 360, width: "100%" }}>
        <Form
          name="login"
          layout="vertical"
          validateTrigger="onBlur"
          requiredMark={false}
          onFinish={onFinish}
        >
          <Form.Item<FieldType>
            name="username"
            rules={[{ required: true, message: "Введите логин" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Логин" />
          </Form.Item>
          <Form.Item<FieldType>
            name="password"
            rules={[
              { required: true, message: "Введите пароль" },
              { min: 6, message: "Пароль должен быть не менее 6 символов" },
            ]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Пароль" />
          </Form.Item>

          <Form.Item
            label={null}
            help="Неверный логин или пароль"
            validateStatus="error"
          >
            <Button type="primary" htmlType="submit" block>
              Вход
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Flex>
  );
};
