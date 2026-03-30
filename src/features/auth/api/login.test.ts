/* eslint-disable @typescript-eslint/no-explicit-any */
import { beforeEach, describe, expect, it, vi } from "vitest";
import { login } from "./login";
import { LOGIN_ERROR } from "../constants";
import { supabase } from "@/shared/lib/supabaseClient";

vi.mock("@/shared/lib/supabaseClient", () => ({
  supabase: {
    auth: {
      signInWithPassword: vi.fn(),
    },
  },
}));

describe("auth/api/login", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("возвращает данные при успешном входе", async () => {
    vi.mocked(supabase.auth.signInWithPassword).mockResolvedValue({
      data: { user: { id: "user-1" }, session: null },
      error: null,
    } as any);

    const result = await login({
      email: "test@example.com",
      password: "secret123",
    });

    expect(supabase.auth.signInWithPassword).toHaveBeenCalledWith({
      email: "test@example.com",
      password: "secret123",
    });

    expect(result).toEqual({
      data: { user: { id: "user-1" }, session: null },
      error: null,
    });
  });

  it("возвращает INVALID_CREDENTIALS при ошибке 400", async () => {
    vi.mocked(supabase.auth.signInWithPassword).mockResolvedValue({
      data: null,
      error: { status: 400 },
    } as any);

    const result = await login({
      email: "test@example.com",
      password: "wrong-password",
    });

    expect(result).toEqual({
      data: null,
      error: LOGIN_ERROR.INVALID_CREDENTIALS,
    });
  });

  it("возвращает NETWORK при отклоненном промисе", async () => {
    vi.mocked(supabase.auth.signInWithPassword).mockRejectedValue(
      new Error("Network down"),
    );

    const result = await login({
      email: "test@example.com",
      password: "secret123",
    });

    expect(result).toEqual({
      data: null,
      error: LOGIN_ERROR.NETWORK,
    });
  });
});
