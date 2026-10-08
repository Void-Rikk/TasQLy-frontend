import { loginValidationSchema } from "../model/validation.ts";

describe("Login Validation", () => {
    it("accepts valid email and password", () => {
        expect(
            loginValidationSchema.safeParse({
                email: "user@example.com",
                password: "secret123",
            }).success,
        ).toBe(true);
    });

    it("rejects invalid email", () => {
        const result = loginValidationSchema.safeParse({
            email: "not-an-email",
            password: "secret123",
        });

        expect(result.success).toBe(false);
    });

    it("rejects short password", () => {
        const result = loginValidationSchema.safeParse({
            email: "user@example.com",
            password: "short",
        });

        expect(result.success).toBe(false);
    });

    it("rejects missing password", () => {
        const result = loginValidationSchema.safeParse({
            email: "user@example.com",
        });

        expect(result.success).toBe(false);
    });
});