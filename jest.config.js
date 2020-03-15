module.exports = {
  transform: {
    "^.+\\.ts?$": "ts-jest"
  },
  verbose: true,
  testURL: "http://localhost:8080",
  moduleFileExtensions: ["js", "ts"],
  moduleDirectories: [
    "node_modules"
  ],
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)(spec|test).[jt]s?(x)"
  ]
}
