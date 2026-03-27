import { supabase } from "@/shared/lib/supabaseClient";
import { LOGIN_ERROR } from "../constants";

export type LoginPayload = {
  email: string;
  password: string;
};

export const login = async ({ email, password }: LoginPayload) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      if ("status" in error && error.status === 400) {
        return { data: null, error: LOGIN_ERROR.INVALID_CREDENTIALS };
      }

      return { data: null, error: LOGIN_ERROR.UNKNOWN };
    }

    return { data, error: null };
  } catch {
    return { data: null, error: LOGIN_ERROR.NETWORK };
  }
};
