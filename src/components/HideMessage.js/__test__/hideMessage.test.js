import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import HiddenMessage from '../index'
it('shows the children when the checkbox is checked', () => {
  const testMessage = 'Test Message'
  render(<HiddenMessage>{testMessage}</HiddenMessage>)
  expect(screen.queryByText(testMessage)).toBeNull()
})