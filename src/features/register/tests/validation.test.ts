import { registerValidationSchema } from "../model/validation.ts";

describe("Register Validation", () => {
    it("accepts valid name, email and password", () => {
        expect(
            registerValidationSchema.safeParse({
                name: "Alice",
                email: "alice@example.com",
                password: "secret123",
            }).success,
        ).toBe(true);
    });

    it("rejects empty name", () => {
        const result = registerValidationSchema.safeParse({
            name: "",
            email: "alice@example.com",
            password: "secret123",
        });

        expect(result.success).toBe(false);
    });

    it("rejects invalid email", () => {
        const result = registerValidationSchema.safeParse({
            name: "Alice",
            email: "not-an-email",
            password: "secret123",
        });

        expect(result.success).toBe(false);
    });

    it("rejects short password", () => {
        const result = registerValidationSchema.safeParse({
            name: "Alice",
            email: "alice@example.com",
            password: "short",
        });

        expect(result.success).toBe(false);
    });

    it("rejects missing password", () => {
        const result = registerValidationSchema.safeParse({
            name: "Alice",
            email: "alice@example.com",
        });

        expect(result.success).toBe(false);
    });
});