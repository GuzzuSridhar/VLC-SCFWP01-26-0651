
import './App.css'
import Button from './components/buttons/dynamic/Button'
import DangerButton from './components/buttons/static/DangerButton'
import PrimaryButton from './components/buttons/static/PrimaryButton'
import SecondaryButton from './components/buttons/static/SecondaryButton'

function App() {
  return (
    <>
      <h1>Components Demo</h1>
      <hr />
      <PrimaryButton />
      <SecondaryButton />
      <DangerButton />

      <hr />
      <Button type="primary" text="Register" />
      <Button type="secondary" text="Help" />
      <Button type="danger" text="Delete" />
    </>
  )
}

export default App
