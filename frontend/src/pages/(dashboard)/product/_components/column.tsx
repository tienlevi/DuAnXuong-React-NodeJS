import { IProduct } from "@/common/types/product";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { Link } from "react-router-dom";
import { deleteProduct } from "@/services/product";

const columns: ColumnDef<IProduct>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) =>
                    table.toggleAllPageRowsSelected(!!value)
                }
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "image",
        header: "Ảnh",
        cell: ({ row }) => {
            const { image } = row.original;
            return <img src={image} width={50} />;
        },
    },
    {
        accessorKey: "name",
        header: "Tên sản phẩm",
    },
    {
        accessorKey: "category",
        header: "Danh mục",
        cell: ({ row }: any) => {
            return <p>{row.original.category.name}</p>;
        },
    },
    {
        accessorKey: "price",
        header: () => <strong className="text-red">Giá</strong>,
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("price"));

            // Format the amount as a dollar amount
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            }).format(amount);

            return <div className="font-medium">{formatted}</div>;
        },
    },
    {
        accessorKey: "featured",
        header: "Trạng thái",
        cell: ({ row }) => {
            const { featured } = row?.original || {};
            return <div>{featured ? "Checked" : "unchecked"}</div>;
        },
    },
    {
        accessorKey: "countInStock",
        header: () => <div>Số lượng</div>,
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("countInStock"));
            return <div className="font-medium">{amount}</div>;
        },
    },
    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }: any) => {
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                            <Link
                                to={`/admin/products/edit/${row.original._id}`}
                            >
                                Edit
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                            onClick={() => deleteProduct(row.original._id)}
                        >
                            Delete
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            View payment details
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];

export default columns;
