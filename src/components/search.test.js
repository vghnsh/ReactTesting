import React from "react"; // Import React library for creating React components.
import { render, fireEvent, waitFor, screen } from "@testing-library/react"; // Import testing utilities from the testing-library/react package.
import axios from "axios"; // Import the axios library for making HTTP requests.
import Search from "./search"; // Import the Search component that you want to test.

jest.mock("axios"); // Mock the axios library to control its behavior during testing.

describe("Search Component", () => {
  afterEach(() => {
    jest.clearAllMocks(); // Clear all mock functions after each test to reset their state.
  });

  it("renders the component correctly", () => {
    render(<Search />); // Render the Search component for testing.
    const changeButton = screen.getByText("Change"); // Find an element with the text "Change" using screen queries.
    expect(changeButton).toBeInTheDocument(); // Assert that the button is in the document.
  });

  //   it("fetches and displays user data on button click", async () => {
  //     // Mock user data response from the API.
  //     const mockUserData = {
  //       data: {
  //         results: [
  //           {
  //             login: { uuid: "123" },
  //             name: { first: "John" },
  //             picture: { large: "https://example.com/john.jpg" },
  //           },
  //           {
  //             login: { uuid: "456" },
  //             name: { first: "Jane" },
  //             picture: { large: "https://example.com/jane.jpg" },
  //           },
  //         ],
  //       },
  //     };

  //     axios.get.mockResolvedValueOnce(mockUserData); // Mock Axios to resolve with the mock user data when axios.get is called.

  //     render(<Search />); // Render the Search component for testing.

  //     const changeButton = screen.getByText("Change"); // Find the "Change" button.
  //     fireEvent.click(changeButton); // Simulate a button click.

  //     expect(changeButton).toBeDisabled(); // Check if the button is disabled during loading

  //     await waitFor(() => {
  //       expect(screen.queryByText("Loading...")).toBeNull(); // Assert that the "Loading..." text is not in the document.
  //     });

  //     expect(screen.getByText("John")).toBeInTheDocument();
  //     expect(screen.getByText("Jane")).toBeInTheDocument();

  //     expect(changeButton).toBeEnabled(); // Check if the button is enabled after loading
  //   });

  //   it("handles API error gracefully", async () => {
  //     axios.get.mockRejectedValue(new Error("API Error")); // Mock Axios to reject with an error when axios.get is called.

  //     render(<Search />); // Render the Search component for testing.

  //     const changeButton = screen.getByText("Change"); // Find the "Change" button.
  //     fireEvent.click(changeButton); // Simulate a button click.

  //     expect(changeButton).toBeDisabled(); // Check if the button is disabled during loading

  //     await waitFor(() => {
  //       expect(screen.queryByText("Loading...")).toBeNull(); // Assert that the "Loading..." text is not in the document.
  //     });

  //     expect(screen.getByText("Error: API Error")).toBeInTheDocument();

  //     expect(changeButton).toBeEnabled(); // Check if the button is enabled after loading
  //   });
});
