import React from "react";
import {
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    TableContainer,
    IconButton,
    useTheme,
    type SxProps,
} from "@mui/material";
import type {
    TableColumn,
    TableRow as TableRowType,
    TableAction,
} from "./types";
import type { Theme } from "@emotion/react";

interface TableContainerProps {
    columns: TableColumn[];
    rows: TableRowType[];
    actions?: TableAction[];
    lastColumn?: string;
    tableHeadSx?: SxProps<Theme>;
    tableIConSx?: SxProps<Theme>;
    LastColumnSx?: SxProps<Theme>;
    containerSx?: SxProps<Theme>;
    onRowClick?: (row: TableRowType) => void;
}

export const MuiTableContainer: React.FC<TableContainerProps> = ({
    columns,
    rows,
    actions,
    lastColumn = "",
    tableHeadSx,
    tableIConSx,
    LastColumnSx,
    containerSx,
    onRowClick,
}) => {
    const theme = useTheme();

    return (
        <TableContainer
            sx={{
                width: "100%",
                overflowX: "auto",
                ...containerSx,
            }}
        >
            <Table sx={{ minWidth: { xs: 0, md: 650 } }}>
                {/* Cabeçalho */}
                <TableHead sx={tableHeadSx}>
                    <TableRow>
                        {columns.map((col) => (
                            <TableCell
                                key={col.key}
                                sx={{
                                    fontWeight: 600,
                                    fontSize: 14,
                                    whiteSpace: "nowrap",
                                    ...tableHeadSx,
                                    minWidth: col.width,
                                }}
                            >
                                {col.label}
                            </TableCell>
                        ))}
                        {lastColumn && (
                            <TableCell
                                sx={{ fontWeight: 600, fontSize: 14, ...LastColumnSx }}
                            >
                                {lastColumn}
                            </TableCell>
                        )}
                    </TableRow>
                </TableHead>

                {/* Corpo */}
                <TableBody>
                    {rows.map((row, i) => (
                        <TableRow
                            key={i}
                            onClick={() => onRowClick?.(row)}
                            sx={{
                                cursor: onRowClick ? "pointer" : "default",
                                "&:hover": {
                                    backgroundColor: theme.palette.action.hover,
                                }
                            }}
                        >
                            {columns.map((col) => (
                                <TableCell
                                    key={col.key}
                                    sx={{
                                        fontSize: 14,
                                        minWidth: col.width || 120,
                                        whiteSpace: "nowrap",
                                    }}
                                >
                                    {row[col.key] as never}
                                </TableCell>
                            ))}

                            {/* Ações */}
                            {actions && (
                                <TableCell
                                    sx={{
                                        display: "flex",
                                        gap: 1,
                                        justifyContent: "center",
                                        ...tableIConSx,
                                    }}
                                >
                                    {actions.map((action, idx) => (
                                        <IconButton
                                            key={idx}
                                            size="small"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                action.onClick(row);
                                            }}
                                            sx={{
                                                backgroundColor: theme.palette.primary.light,
                                                "&:hover": {
                                                    backgroundColor: "#0d1f3a4f",
                                                    color: theme.palette.secondary.main,
                                                },
                                                borderRadius: "4px",
                                            }}
                                        >
                                            {action.icon}
                                        </IconButton>
                                    ))}
                                </TableCell>
                            )}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer >
    );
};
