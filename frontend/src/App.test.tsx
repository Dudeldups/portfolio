// simple test to test the default Vite App component

import { render } from "@testing-library/react";
import App from "./App";

test("renders App", () => {
  const isRendered = render(<App />);
  expect(isRendered).toBeTruthy();
});
