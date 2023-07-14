import RouteSwitch from './RouteSwitch';
import { render, screen } from '@testing-library/react';

describe("Route Switch:  heading testing", ()=> {
    it("renders correct heading", ()=> {
        render(<RouteSwitch />);
        expect(screen.getByRole("heading").textContent).toMatch(/Unlock Your Wealth Potential with Our Expert Brokerage Services/i);
    })
    it("Should render link portfolio", ()=> {
        render(<RouteSwitch />);
        const linkElement = screen.getByTestId("link-0");
        expect(linkElement).toBeInTheDocument();
    })
    // Test for portfolio link text for exactly just the Text Portfolio
    it("should render text 'Portfolio' for the portfolio link", () => {
        render(<RouteSwitch />);
        const portfolioLink = screen.getByTestId("link-0");
        const expectedText = /^Portfolio$/i;
        expect(portfolioLink).toHaveTextContent(expectedText)
    })

  // Test for Stocks  link text
  it("should render text 'Stocks' for the stocks link", () => {
    render(<RouteSwitch />);
    const stocksLink = screen.getByTestId("link-1");
    const expectedText = /^Stocks$/i;
    expect(stocksLink).toHaveTextContent(expectedText)
})


  // Test for REITs  link text
  it("should render text 'Stocks' for the reits link", () => {
    render(<RouteSwitch />);
    const reitsLink = screen.getByTestId("link-2");
    const expectedText = /^REITs$/i;
    expect(reitsLink).toHaveTextContent(expectedText)

})

  // Test for Stocks  link text
  it("should render text 'Bonds' for the bonds link", () => {
    render(<RouteSwitch />);
    const bondsLink = screen.getByTestId("link-3");
    const expectedText = /^Bonds$/i;
    expect(bondsLink).toHaveTextContent(expectedText)

})






    it("Should render link stocks", ()=> {
        render(<RouteSwitch />);
        const linkElement = screen.getByTestId("link-1");
        expect(linkElement).toBeInTheDocument();
    })
    it("Should render link REITs", ()=> {
        render(<RouteSwitch />);
        const linkElement = screen.getByTestId("link-2");
        expect(linkElement).toBeInTheDocument();
    })


    it("Should render link bonds", ()=> {
        render(<RouteSwitch />);
        const linkElement = screen.getByTestId("link-3");
        expect(linkElement).toBeInTheDocument();
    })
    it("Should render link cart", ()=> {
        render(<RouteSwitch />);
        const linkElement = screen.getByTestId("link-cart");
        expect(linkElement).toBeInTheDocument();
    })


})