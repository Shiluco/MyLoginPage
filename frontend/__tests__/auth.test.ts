
import {
  signUp,
  login,
  logout,
  updateUser,
  resetPassword,
} from "../service/AuthService";

import { supabase } from "../service/supabaseClient";

describe("Supabase Auth Functions", () => {
  afterAll(async () => {
    await supabase.auth.signOut();
  });

  test("load environment variables", () =>
  {
    expect(process.env.SUPABASE_URL).toBeDefined();
    expect(process.env.SUPABASE_KEY).toBeDefined();
  });

  test("Sign up a new user", async () => {
    const data = await signUp("test@example.com", "password123", "Test User");
    expect(data).not.toBeNull();
    expect(data.user).toBeDefined();
    if (data.user) {
      expect(data.user.email).toBe("test@example.com");
    } else {
      throw new Error("User object is null");
    }
  });

  test("Log in with valid credentials", async () => {
    const data = await login("test@example.com", "password123");
    expect(data).not.toBeNull();
    expect(data.user).toBeDefined();
    expect(data.user.email).toBe("test@example.com");
  });

  test("Update user information", async () => {
    const data = await updateUser(
      "test@example.com",
      "newpassword123",
      "Updated User"
    );
    expect(data).not.toBeNull();
    expect(data.user).toBeDefined();
    expect(data.user.email).toBe("test@example.com");
  });

  // Uncomment when you want to test the reset password functionality
  // test("Request password reset", async () => {
  //   await expect(resetPassword("test@example.com")).resolves.toBeUndefined();
  // });

  test("Log out the user", async () => {
    await expect(logout()).resolves.toBeUndefined();
  });
});
