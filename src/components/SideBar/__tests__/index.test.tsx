import { render } from '@testing-library/react'
import { SideBar } from '../index'

const sideBarTestId = "sideBar-component-id"

jest.mock("react-router-dom", () => ({
    useNavigate: jest.fn()
}))

describe("<Sidebar />", () => {
    it("Should render <Sidebar /> correctly", () => {
        const {getByTestId, debug} = render(<SideBar />)
        const element = getByTestId(sideBarTestId)
        debug()
        expect(element).toBeDefined()
    })
})