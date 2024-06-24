/* eslint-env jest */
import React from "react";
import renderer from "react-test-renderer";
import Button from "../Button";

describe("Button Component", () => {
  it("should trigger onPress event when pressed", () => {
    const mockOnPress = jest.fn();
    const component = renderer.create(
      <Button title="Press Me" onPress={mockOnPress} />,
    );

    // Log the component tree for debugging
    console.log(component.toJSON());

    const buttonInstance = component.root.findByProps({ onPress: mockOnPress });
    buttonInstance.props.onPress();
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it("should display the correct title", () => {
    const component = renderer.create(
      <Button title="Press Me" onPress={() => {}} />,
    );

    // Log the component tree for debugging
    console.log(component.toJSON());

    const textInstance = component.root.findByType("Text");
    expect(textInstance.props.children).toBe("Press Me");
  });
});
