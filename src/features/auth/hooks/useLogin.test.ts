/* eslint-disable @typescript-eslint/no-explicit-any */
// @vitest-environment jsdom

import { act, renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { useLogin } from "./useLogin";
import { login as loginRequest } from "../api/login";
import { LOGIN_ERROR } from "../constants";

vi.mock("../api/login", () => ({
  login: vi.fn(),
}));

describe("auth/hooks/useLogin", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("возвращает данные при успешном входе и завершает загрузку", async () => {
    const authData = { user: { id: "user-1" }, session: null };

    vi.mocked(loginRequest).mockResolvedValue({
      data: authData,
      error: null,
    } as any);

    const { result } = renderHook(() => useLogin());

    let response;

    await act(async () => {
      response = await result.current.login({
        email: "test@example.com",
        password: "secret123",
      });
    });

    expect(loginRequest).toHaveBeenCalledWith({
      email: "test@example.com",
      password: "secret123",
    });
    expect(response).toEqual(authData);
    expect(result.current.error).toBeNull();
    expect(result.current.isLoading).toBe(false);
  });

  it("устанавливает понятную ошибку при неверных учетных данных", async () => {
    vi.mocked(loginRequest).mockResolvedValue({
      data: null,
      error: LOGIN_ERROR.INVALID_CREDENTIALS,
    });

    const { result } = renderHook(() => useLogin());

    await act(async () => {
      await result.current.login({
        email: "test@example.com",
        password: "wrong-password",
      });
    });

    expect(result.current.error).toBe("Неверный логин или пароль");
    expect(result.current.isLoading).toBe(false);
  });

  it("сбрасывает ошибку через clearError", async () => {
    vi.mocked(loginRequest).mockResolvedValue({
      data: null,
      error: LOGIN_ERROR.NETWORK,
    });

    const { result } = renderHook(() => useLogin());

    await act(async () => {
      await result.current.login({
        email: "test@example.com",
        password: "secret123",
      });
    });

    act(() => {
      result.current.clearError();
    });

    expect(result.current.error).toBeNull();
  });
});
