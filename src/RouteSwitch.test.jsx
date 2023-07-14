import RouteSwitch from "./RouteSwitch";
import { render, screen, fireEvent } from "@testing-library/react";


// part one : testing content
describe("Route Switch:  heading testing", () => {
  it("renders correct heading", () => {
    render(<RouteSwitch />);
    expect(screen.getByRole("heading").textContent).toMatch(
      /Unlock Your Wealth Potential with Our Expert Brokerage Services/i
    );
  });
  it("Should render link portfolio", () => {
    render(<RouteSwitch />);
    const linkElement = screen.getByTestId("link-0");
    expect(linkElement).toBeInTheDocument();
  });

  it("Should render link cart", () => {
    render(<RouteSwitch />);
    const linkElement = screen.getByTestId("link-cart");
    expect(linkElement).toBeInTheDocument();
  });

  it("Should render link stocks", () => {
    render(<RouteSwitch />);
    const linkElement = screen.getByTestId("link-1");
    expect(linkElement).toBeInTheDocument();
  });

  it("Should render link REITs", () => {
    render(<RouteSwitch />);
    const linkElement = screen.getByTestId("link-2");
    expect(linkElement).toBeInTheDocument();
  });

// part two> testing text of the links: 

  // Test for portfolio link text for exactly just the Text Portfolio
  it("should render text 'Portfolio' for the portfolio link", () => {
    render(<RouteSwitch />);
    const portfolioLink = screen.getByTestId("link-0");
    const expectedText = /^Portfolio$/i;
    expect(portfolioLink).toHaveTextContent(expectedText);
  });

  // Test for Stocks  link text
  it("should render text 'Stocks' for the stocks link", () => {
    render(<RouteSwitch />);
    const stocksLink = screen.getByTestId("link-1");
    const expectedText = /^Stocks$/i;
    expect(stocksLink).toHaveTextContent(expectedText);
  });

  // Test for REITs  link text
  it("should render text 'Stocks' for the reits link", () => {
    render(<RouteSwitch />);
    const reitsLink = screen.getByTestId("link-2");
    const expectedText = /^REITs$/i;
    expect(reitsLink).toHaveTextContent(expectedText);
  });
  it("Should render link bonds", () => {
    render(<RouteSwitch />);
    const linkElement = screen.getByTestId("link-3");
    expect(linkElement).toBeInTheDocument();
  });

  // Test for bonds  link text
  it("should render text 'Bonds' for the bonds link", () => {
    render(<RouteSwitch />);
    const bondsLink = screen.getByTestId("link-3");
    const expectedText = /^Bonds$/i;
    expect(bondsLink).toHaveTextContent(expectedText);
  });

  // part 3, >  testing when clicking goes to right page : 

  // testing the links of navigation links

  it("should navigate to '/portfolio' when clicking on the portfolio link", () => {
    render(<RouteSwitch />);

    const portfolioLink = screen.getByTestId("link-0");
    fireEvent.click(portfolioLink);

    expect(window.location.pathname).toBe("/portfolio");
  });

  it("should navigate to '/stocks' when clicking on the stocks link", () => {
    render(<RouteSwitch />);

    const stocksLink = screen.getByTestId("link-1");
    fireEvent.click(stocksLink);

    expect(window.location.pathname).toBe("/stocks");
  });

  it("should navigate to '/reits' when clicking on the reits link", () => {
    render(<RouteSwitch />);

    const reitsLink = screen.getByTestId("link-2");
    fireEvent.click(reitsLink);

    expect(window.location.pathname).toBe("/reits");
  });


  it("should navigate to '/bonds' when clicking on the bonds link", () => {
    render(<RouteSwitch />);

    const bondsLink = screen.getByTestId("link-3");
    fireEvent.click(bondsLink);

    expect(window.location.pathname).toBe("/bonds");
  });




});
