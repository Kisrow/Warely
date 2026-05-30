import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Flex, Form, Input } from "antd";
import { useLogin } from "../hooks/useLogin";
import { useNavigate } from "react-router-dom";

type FieldType = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const navigate = useNavigate();
  const { login, isLoading, error, clearError } = useLogin();
  const onSubmit = async (values: FieldType) => {
    const response = await login(values);
    if (response) {
      navigate("/");
    }
  };
  return (
    <Flex justify="center" align="center" style={{ minHeight: "100vh" }}>
      <Card style={{ maxWidth: 360, width: "100%" }}>
        <Form
          name="login"
          layout="vertical"
          validateTrigger="onBlur"
          requiredMark={false}
          onFinish={onSubmit}
          onValuesChange={clearError}
          disabled={isLoading}
        >
          <Form.Item<FieldType>
            name="email"
            rules={[{ required: true, message: "Введите email" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="admin@test.com" />
          </Form.Item>
          <Form.Item<FieldType>
            name="password"
            rules={[
              { required: true, message: "Введите пароль" },
              { min: 6, message: "Пароль должен быть не менее 6 символов" },
            ]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="123456" />
          </Form.Item>

          <Form.Item
            label={null}
            help={error}
            validateStatus={error ? "error" : undefined}
          >
            <Button type="primary" htmlType="submit" block loading={isLoading}>
              Вход
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Flex>
  );
};
