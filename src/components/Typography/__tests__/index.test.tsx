import { Typography } from '@components/Typography'
import { render } from '@testing-library/react'
const content = `typography-test-content`
const testId = `typography-test-id`
describe(`<Typography />`, () => {
  it(`Should render component correctly`, () => {
    const { getByTestId } = render(
      <Typography dataTestid={testId}>{content}</Typography>,
    )
    const element = getByTestId(testId)
    expect(element).toBeDefined()
  })
  it(`Should render content correctly`, () => {
    const { getByTestId } = render(
      <Typography dataTestid={testId}>{content}</Typography>,
    )
    const element = getByTestId(testId)
    const elementContent = element.textContent
    expect(elementContent).toEqual(content)
  })
})
