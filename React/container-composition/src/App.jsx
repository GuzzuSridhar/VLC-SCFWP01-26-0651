import "./App.css"
import Button from "./components/buttons/Button"
import ButtonGroup from "./components/buttons/ButtonGroup"

function App() {
  return (
    <>
      <h1>Container Composition</h1>
      <hr />
      {/* single button */}
      <ButtonGroup>
        <Button type="primary" text="Primary" />
      </ButtonGroup>

      {/* two Buttons */}
      <ButtonGroup>
        <Button type="primary" text="Primary" />
        <Button type="secondary" text="Secondary" />
      </ButtonGroup>

      {/* three buttons */}
      <ButtonGroup>
        <Button type="primary" text="Primary" />
        <Button type="secondary" text="Secondary" />
        <Button type="danger" text="Danger" />
      </ButtonGroup>

      {/* Combination of 4 buttons */}
      <ButtonGroup>
        <Button type="primary" text="Add" />
        <Button type="secondary" text="View" />
        <Button type="danger" text="Delete" />
        <Button type="primary" text="Update" />
      </ButtonGroup>
    </>
  )
}

export default App