import * as assert from "assert"
import { after } from "mocha"
import * as vscode from "vscode"
// import * as myExtension from "../extension"

suite("Extension Test Suite", () => {
  after(() => {
    vscode.window.showInformationMessage("All tests done!")
  })

  test("Sample test", () => {
    assert.notEqual(1, 0)
    assert.equal(1, 1)
  })
})
