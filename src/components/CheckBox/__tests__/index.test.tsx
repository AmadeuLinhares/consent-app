import { Checkbox } from '@components/CheckBox'
import { render } from '@testing-library/react'

const mockLabel = `mock-label`
const checkboxTestId = `checkbox-component-testid`
const labelCheckboxTestId = `label-checkbox-testid`

describe(`<Checkbox />`, () => {
  it(`Should render component correctly`, () => {
    const { getByTestId } = render(<Checkbox label={mockLabel} />)

    const element = getByTestId(checkboxTestId)
    expect(element).toBeDefined()
  })
  it(`Should render label component correctly`, () => {
    const { getByTestId } = render(<Checkbox label={mockLabel} />)

    const element = getByTestId(labelCheckboxTestId)
    expect(element).toBeDefined()
  })
  it(`Should render label content correctly`, () => {
    const { getByTestId } = render(<Checkbox label={mockLabel} />)

    const element = getByTestId(checkboxTestId)
    const content = element.textContent
    expect(content).toEqual(mockLabel)
  })
})
