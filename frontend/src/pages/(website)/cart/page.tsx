import useCart from "@/common/hooks/useCart";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CartPage = () => {
    const { data, mutate, calculateTotal } = useCart();

    return (
        <div className="container">
            <h1 className="text-[32px] text-center font-bold my-10">
                Giỏ hàng
            </h1>
            <table className="w-full">
                <thead>
                    <tr>
                        <th className="border-2 p-4">#</th>
                        <th className="border-2 p-4">Tên sản phẩm</th>
                        <th className="border-2 p-4">Giá</th>
                        <th className="border-2 p-4">Số lượng</th>
                        <th className="border-2 p-4">Tổng giá</th>
                        <th className="border-2 p-4"></th>
                    </tr>
                </thead>
                <tbody>
                    {data?.products.map((product: any, index: number) => {
                        return (
                            <tr key={index}>
                                <td className="border-2 p-4">{index + 1}</td>
                                <td className="border-2 p-4">{product.name}</td>
                                <td className="border-2 p-4">
                                    {product.price}đ
                                </td>
                                <td className="border-2 p-4">
                                    <div className="flex items-center justify-center">
                                        {" "}
                                        <button
                                            className="py-2 px-4 bg-slate-400"
                                            onClick={() => {
                                                mutate({
                                                    action: "DECREMENT",
                                                    productId:
                                                        product.productId,
                                                });
                                            }}
                                        >
                                            -
                                        </button>
                                        <p className="mx-5">
                                            {product.quantity}
                                        </p>
                                        <button
                                            className="py-2 px-4 bg-emerald-400"
                                            onClick={() =>
                                                mutate({
                                                    action: "INCREMENT",
                                                    productId:
                                                        product.productId,
                                                })
                                            }
                                        >
                                            +
                                        </button>
                                    </div>
                                </td>
                                <td className="border-2 p-2">
                                    {product.price * product.quantity}đ
                                </td>
                                <td className="border-2 p-2">
                                    <button
                                        className="py-2 px-4 bg-red-500 text-white rounded-sm"
                                        onClick={() =>
                                            mutate({
                                                action: "REMOVE",
                                                productId: product.productId,
                                            })
                                        }
                                    >
                                        Xóa
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <p>Total: ${calculateTotal()}</p>
            <Button className="my-5">
                <Link to="/orders">Thanh toán</Link>
            </Button>
        </div>
    );
};

export default CartPage;
