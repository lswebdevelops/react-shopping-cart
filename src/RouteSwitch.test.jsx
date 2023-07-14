import RouteSwitch from './RouteSwitch';
import { render, screen } from '@testing-library/react';

describe("Route Switch:  heading testing", ()=> {
    it("renders correct heading", ()=> {
        render(<RouteSwitch />);
        expect(screen.getByRole("heading").textContent).toMatch(/Unlock Your Wealth Potential with Our Expert Brokerage Services/i);
    })
})