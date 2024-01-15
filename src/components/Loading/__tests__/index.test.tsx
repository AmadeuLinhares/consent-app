
import { render } from '@testing-library/react'
import { Loading } from '../index'
const testId = "global-loader-component"
const testIdLabel = "global-loader-label"

jest.mock('@storage/globalLoader', () => ({
  useGlobalLoader: () => true,
}));

beforeEach(() => {
    jest.mock('@storage/globalLoader', () => ({
        useGlobalLoader: () => true,
    }));
});

afterEach(() => {
    jest.resetAllMocks()
})

describe('<Loading />', () => {
  it("Should render Loader correctly", () => {
    const {getByTestId} = render(<Loading />)
    const element = getByTestId(testId)
    expect(element).toBeDefined()
  })
  it("Should render label loader correctly", () => {
    const {getByTestId} = render(<Loading />)
    const element = getByTestId(testIdLabel)
    expect(element).toBeDefined()
  })
  it("Should not render Loader component", () => {
    jest.mock('@storage/globalLoader', () => ({
        useGlobalLoader: () => false,
    }));
    const {getByTestId} = render(<Loading />)
    const element = getByTestId(testId)
    expect(element).toBeDefined()
  })
})