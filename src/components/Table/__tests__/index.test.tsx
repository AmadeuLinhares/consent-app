import { Table } from '@components/Table'
import { GridColDef } from '@mui/x-data-grid'
import { render } from '@testing-library/react'

const testId = `dataGrid-component-id`
const nextPageTestId = `dataGrid-component-nextPage-id`
const previousPageTestId = `dataGrid-component-previousPage-id`
const paginationDescriptionTestId = `dataGrid-component-pagination-description`
const onNextPage = jest.fn()
const onPreviousPage = jest.fn()
const currentPage = 1
const totalPage = 1
describe(`<Table />`, () => {
  const columnsMock: GridColDef[] = [
    { field: `id`, headerName: `ID`, width: 70 },
  ]
  const rowsMock = [
    {
      id: 1,
    },
    {
      id: 2,
    },
  ]

  it(`Should render component correctly`, () => {
    const { getByTestId } = render(
      <Table
        columns={columnsMock}
        rows={rowsMock}
        onNextPage={onNextPage}
        onPreviousPage={onPreviousPage}
        currentPage={currentPage}
        totalPages={totalPage}
      />,
    )
    const element = getByTestId(testId)
    expect(element).toBeDefined()
  })

  it(`Should go to next page on click`, () => {
    const { getByTestId } = render(
      <Table
        columns={columnsMock}
        rows={rowsMock}
        onNextPage={onNextPage}
        onPreviousPage={onPreviousPage}
        currentPage={currentPage}
        totalPages={totalPage}
      />,
    )
    const element = getByTestId(nextPageTestId)

    expect(element).toBeDefined()
    element.click()
    expect(onNextPage).toHaveBeenCalled()
  })
  it(`Should go to previous page on click`, () => {
    const { getByTestId } = render(
      <Table
        columns={columnsMock}
        rows={rowsMock}
        onNextPage={onNextPage}
        onPreviousPage={onPreviousPage}
        currentPage={currentPage}
        totalPages={totalPage}
      />,
    )
    const element = getByTestId(previousPageTestId)

    expect(element).toBeDefined()
    element.click()
    expect(onNextPage).toHaveBeenCalled()
  })
  it(`Should render pagination component correctly`, () => {
    const { getByTestId } = render(
      <Table
        columns={columnsMock}
        rows={rowsMock}
        onNextPage={onNextPage}
        onPreviousPage={onPreviousPage}
        currentPage={currentPage}
        totalPages={totalPage}
      />,
    )
    const element = getByTestId(paginationDescriptionTestId)

    expect(element).toBeDefined()
  })
  it(`Should render pagination description correctly`, () => {
    const { getByTestId } = render(
      <Table
        columns={columnsMock}
        rows={rowsMock}
        onNextPage={onNextPage}
        onPreviousPage={onPreviousPage}
        currentPage={currentPage}
        totalPages={totalPage}
      />,
    )
    const element = getByTestId(paginationDescriptionTestId)

    expect(element).toBeDefined()
    const content = element.textContent

    expect(content).toMatch(`${currentPage} - ${totalPage} of ${totalPage}`)
  })
})
