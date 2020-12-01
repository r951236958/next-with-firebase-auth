import { Button, WindmillContext } from '@windmill/react-ui'
import React, { useContext } from 'react'

function DarkModeToggle() {
  const { mode, toggleMode } = useContext(WindmillContext)
  return (
      <>
    <Button onClick={toggleMode}>Toggle theme</Button>
    <p>Current theme is: {mode}</p>
    </>
  )
}
export default DarkModeToggle