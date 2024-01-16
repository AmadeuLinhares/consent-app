import { SideBar } from '@components/SideBar'
import { sidebarOptions } from '@configs/sideBarOptions'
import { render } from '@testing-library/react'

const sideBarTestId = `sideBar-component-id`

const mockNavigate = jest.fn()

jest.mock(`react-router-dom`, () => ({
  useNavigate: () => mockNavigate,
}))

describe(`<Sidebar />`, () => {
  it(`Should render <Sidebar /> correctly`, () => {
    const { getByTestId, debug } = render(<SideBar />)
    const element = getByTestId(sideBarTestId)
    debug()
    expect(element).toBeDefined()
  })
  it(`Should render  - Collected consents -  correctly`, () => {
    const { getByTestId, debug } = render(<SideBar />)
    const element = getByTestId(sideBarTestId)
    debug()
    expect(element).toBeDefined()
  })

  it(`should call function when click inside sidebar options`, () => {
    const { getByTestId } = render(<SideBar />)
    const element = getByTestId(sidebarOptions[0].key)

    expect(element).toBeDefined()

    element.click()

    expect(mockNavigate).toHaveBeenCalled()
  })
})
