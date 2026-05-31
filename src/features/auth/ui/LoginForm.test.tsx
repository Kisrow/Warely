// @vitest-environment jsdom

import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import { LoginForm } from "./LoginForm";
import { useLogin } from "../hooks/useLogin";

vi.mock("../hooks/useLogin", () => ({
  useLogin: vi.fn(),
}));

describe("auth/ui/LoginForm", () => {
  it("показывает ошибку из хука", () => {
    vi.mocked(useLogin).mockReturnValue({
      login: vi.fn(),
      isLoading: false,
      error: "Неверный логин или пароль",
      clearError: vi.fn(),
    });

    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>,
    );

    expect(screen.getByText("Неверный логин или пароль")).toBeInTheDocument();
  });

  it("отправляет введенные данные через login", async () => {
    const login = vi.fn().mockResolvedValue(undefined);
    const clearError = vi.fn();

    vi.mocked(useLogin).mockReturnValue({
      login,
      isLoading: false,
      error: null,
      clearError,
    });

    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>,
    );

    fireEvent.change(screen.getAllByPlaceholderText("admin@test.com")[0], {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getAllByPlaceholderText("123456")[0], {
      target: { value: "secret123" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Вход" }));

    await waitFor(() => {
      expect(login).toHaveBeenCalledWith({
        email: "test@example.com",
        password: "secret123",
      });
    });

    expect(clearError).toHaveBeenCalled();
  });
});
