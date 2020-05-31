import React from "react";
import { render } from "@testing-library/react";

import App from ".";
import { testIds } from "@constants";

describe("testing App component", () => {
  it("renders without error", () => {
    const { getByTestId } = render(<App />);
    const appElement = getByTestId(testIds.app);

    expect(appElement).toBeInTheDocument();
  });
});
