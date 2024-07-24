/* eslint-env jest */
import React from "react";
import renderer from "react-test-renderer";
import App from "../../App";

// Mock the alert function
global.alert = (message) => console.log(message);

describe("<App />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
