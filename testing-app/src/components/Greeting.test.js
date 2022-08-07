import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

// global functions for more test
describe("Greeting component", () => {
  test("renders Hello World as a text", () => {
    // 1) Arrange
    render(<Greeting />);

    // 2) Act
    //... nothing

    // 3) Assert
    const helloWorldElement = screen.getByText("Hello world");
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders good to see you if the button was NOT clicked", () => {
    render(<Greeting />);
    const paragraphElement = screen.getByText("good to see you", {
      exact: false,
    });
  });

  test('renders "Changed!" if the button was clicked', () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const paragraphElement = screen.getByText("Changed!");
    expect(paragraphElement).toBeInTheDocument();
  });

  test('does not render "good to see you" if the button was clicked', () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const paragraphElement = screen.queryByText("good to see you", {
      exact: false,
    });
    expect(paragraphElement).toBeNull();
  });
});

// test("renders Hello World as a text", () => {
//   // 1) Arrange
//   render(<Greeting />);

//   // 2) Act
//   //... nothing

//   // 3) Assert
//   const helloWorldElement = screen.getByText("Hello world");
//   expect(helloWorldElement).toBeInTheDocument();
// });
