import { useState } from "react";
import { login as loginRequest, type LoginPayload } from "../api/login";
import { LOGIN_ERROR } from "../constants";

export const useLogin = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async ({ email, password }: LoginPayload) => {
    try {
      setIsLoading(true);
      setError(null);

      const { data, error } = await loginRequest({ email, password });

      if (error) {
        switch (error) {
          case LOGIN_ERROR.INVALID_CREDENTIALS:
            setError("Неверный логин или пароль");
            break;
          case LOGIN_ERROR.NETWORK:
            setError("Сервер не отвечает");
            break;
          default:
            setError("Произошла неизвестная ошибка");
        }
        return;
      }

      return data;
    } catch {
      setError("Произошла непредвиденная ошибка");
    } finally {
      setIsLoading(false);
    }
  };

  const clearError = () => {
    setError(null);
  };

  return {
    error,
    isLoading,
    login,
    clearError,
  };
};
