import {
    useReactTable,
    getCoreRowModel,
    getFilteredRowModel,
    flexRender,
} from '@tanstack/react-table'
import { useState } from 'react'

function GenericTable({
    data = [],
    columns = [],
    onDelete,
    filterColumn = null,
    filterPlaceholder = 'Search...',
}) {
    const [columnFilters, setColumnFilters] = useState([])

    const table = useReactTable({
        data,
        columns,

        state: {
            columnFilters,
        },

        onColumnFiltersChange: setColumnFilters,

        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
    })

    return (
        <>
            {filterColumn && (
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder={filterPlaceholder}
                        className="input input-bordered w-full"
                        value={
                            table.getColumn(filterColumn)?.getFilterValue() ?? ''
                        }
                        onChange={(e) =>
                            table
                                .getColumn(filterColumn)
                                ?.setFilterValue(e.target.value)
                        }
                    />
                </div>
            )}

            <table className="table">
                <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <th key={header.id}>
                                    {flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                    )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>

                <tbody>
                    {table.getRowModel().rows.map(row => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map(cell => (
                                <td key={cell.id}>
                                    {flexRender(
                                        cell.column.columnDef.cell,
                                        cell.getContext()
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default GenericTable