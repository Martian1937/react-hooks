import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("click", () => {
    const { getByText, getByTestId } = render(
      <div>
        <label htmlFor="checkbox">Check</label>
        <input id="checkbox" data-testid="checkbox" type="checkbox" />
      </div>
    );
    userEvent.click(getByText("Check"));
    const checkbox = getByTestId("checkbox");
    expect(checkbox).toHaveProperty("checked", true);
  });
   
  test("double click", () => {
    const onChange = jest.fn();
    const { getByTestId } = render(
      <input type="checkbox" data-testid="checkbox" onChange={onChange} />
    );
    const checkbox = getByTestId("checkbox");
    userEvent.dblClick(checkbox);
    expect(onChange).toHaveBeenCalledTimes(2);
    expect(checkbox).toHaveProperty("checked", false);
  });

  test("type", () => {
    render(<textarea data-testid="email" />);
    const testArea = screen.getByTestId("email");
    userEvent.type(testArea, "Hello, World!");
    expect(testArea).toHaveValue("Hello, World!");
});


it('selectOptions', () => {
    render(
      <select multiple>
        <option value="1">A</option>
        <option value="2">B</option>
        <option value="3">C</option>
      </select>,
    )
  
    userEvent.selectOptions(screen.getByRole('listbox'), ['1', '3'])
  
    expect(screen.getByRole('option', {name: 'A'}).selected).toBe(true)
    expect(screen.getByRole('option', {name: 'B'}).selected).toBe(false)
    expect(screen.getByRole('option', {name: 'C'}).selected).toBe(true)
  })