import { Command } from "../schema/command";
import { validateConfig } from "../schema/validator";

test("test good command", () => {
  const goodCommand: Command = {
    name: "Hi",
    timeout: 10,
    location: "",
    commandStart: "./bin",
  };
  validateConfig(goodCommand);
});

test("test bad command", () => {
  const badCommand = {
    timeout: -10,
    commandStart: "./bin",
  };
  expect(() => validateConfig(badCommand as Command)).toThrow(
    "Command file is invalid",
  );
});
