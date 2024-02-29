// submitName.test.js
const { JSDOM } = require('jsdom');
const { fireEvent } = require('@testing-library/dom');
const submitName = require('./submitName');

let document;

beforeEach(() => {
  const dom = new JSDOM(`
    <html>
      <body>
        <input id="nameInput" type="text" />
        <div id="Greetin"></div>
      </body>
    </html>
  `);
  document = dom.window.document;
  global.document = document;
});

test('submitName should update UI with a greeting message', () => {
  submitName();
  expect(document.getElementById("Greetin").textContent).toBe("hallo banana, ");
});

test('submitName should update UI with a custom greeting message', () => {
  document.getElementById("nameInput").value = "John";
  submitName();
  expect(document.getElementById("Greetin").textContent).toBe("hallo banana, John");
});

test('submitName should show an alert for an empty name', () => {
  const originalAlert = global.alert;
  let alertMessage;
  global.alert = message => alertMessage = message;

  submitName();

  global.alert = originalAlert;

  expect(alertMessage).toBe("bitte eine gute name:");
});
