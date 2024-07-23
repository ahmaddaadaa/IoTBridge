/* eslint-env jest */
import React from "react";
import renderer from "react-test-renderer";
import App from "../../App";
import SensorChart from "../../components/SensorChart";

// Mock the alert function
global.alert = (message) => console.log(message);

// Mock the SensorChart component to avoid WebSocket and other side effects
jest.mock("../../components/SensorChart", () => {
  return function DummySensorChart() {
    return <div>SensorChart</div>;
  };
});

describe("<App />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("contains the SensorChart component", () => {
    const tree = renderer.create(<App />).root;
    expect(tree.findByType(SensorChart)).toBeTruthy();
  });
});
