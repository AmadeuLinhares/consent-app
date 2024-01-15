
import { render } from '@testing-library/react'
import { Input } from '../index'

const testIdContainerInput = "input-component-container"

describe('<Input />', () => {
  it("Should render input correctly", () => {
    const {getByTestId} = render(<Input />)
    const element = getByTestId(testIdContainerInput)
  
    expect(element).toBeDefined()
  })
  it("Should render helper text correctly", () => {
    const { getByText} = render(<Input error={true} helperText="testHelpText" />)
    const element = getByText("testHelpText")
    
    expect(element).toBeDefined()
  })
})