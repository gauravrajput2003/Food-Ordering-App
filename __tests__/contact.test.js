import { render,screen } from "@testing-library/react"
import Contact from "../src/Components/Contact"
import "@testing-library/jest-dom"

test ("load conatct",()=>{
    render(<Contact/>);

  const btn = screen.getByRole("button");
  expect(button).toBeInTheDocument();
})