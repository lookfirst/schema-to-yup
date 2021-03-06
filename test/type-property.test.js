const { buildYup } = require("../src");

describe.skip("models schema", () => {
  const modelsJsonSchema = {
    title: "models",
    type: "object",
    properties: {
      name: {
        type: "string",
        required: true
      },
      type: {
        type: "string",
        required: true
      }
    }
  };

  const schema = buildYup(modelsJsonSchema);

  test("invalid json is invalid", async () => {
    const valid = schema.isValidSync({ type: "Person", name: "Administrator" });
    expect(valid).toBe(false);
  });
});
