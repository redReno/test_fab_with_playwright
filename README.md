# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Before running this. Run `yarn start` and start a Chromium browser with the flag --remote-debugging-port=9222

This will run a simple test twice. Once using the default browser, the other using the already active browser context using connectOverCDP.

What should happen is that the first test passes, while the second doesn't.

It should hover above a FAB and click one of the now visible buttons.
In the second case Playwright seems to register the hover operation as
successful but the FAB does not seem to actually show the underlying
action buttons when connectOverCDP is used.

It is, however, possible to manually hover using the mouse, which will kickstart the
test and make it complete the last step.

The test will pass without assistance, if --remote-debugging-port=9222 AND
--headless are used to start the browser.
