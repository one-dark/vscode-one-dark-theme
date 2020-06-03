import * as assert from "assert"
import { after } from "mocha"
import * as vscode from "vscode"
// import * as myExtension from "../extension"

suite("Extension Test Suite", () => {
  after(() => {
    vscode.window.showInformationMessage("All tests done!")
  })

  test("Sample test", () => {
    assert.equal(-1, [1, 2, 3].indexOf(1))
    assert.equal(-1, [1, 2, 3].indexOf(0))
  })
})
