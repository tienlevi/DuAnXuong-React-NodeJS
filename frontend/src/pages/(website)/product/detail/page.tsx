import useProductQueryId from "@/common/hooks/useProductQueryId";
import { Link, useParams } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { useMutation } from "@tanstack/react-query";
import { useStorage } from "@/common/hooks/useStorage";
import "./style.scss";
import axios from "axios";

const DetailProduct = () => {
    const { id }: any = useParams();
    const { data } = useProductQueryId(id);

    const [user] = useStorage("user", {}, localStorage);

    const { toast } = useToast();
    const { mutate } = useMutation({
        mutationFn: async (data: {
            userId: any;
            products: { productId: any; quantity: number };
        }) => {
            const response = await axios.post(
                "http://localhost:8080/api/v1/carts/add-to-cart",
                data,
            );
            return response.data;
        },
        onSuccess: () => {
            toast({
                title: "Thêm giỏ hàng thành công",
                variant: "success",
            });
        },
    });

    return (
        <div className="product-container">
            <div className="product-image">
                {/* Replace # with the actual image source */}
                <img src={data?.image} alt="Product Image" />
            </div>
            <div className="product-info">
                <h2 className="product-name">{data?.name}</h2>
                <p className="product-price">{data?.price}đ</p>
                <p className="product-reviews">Giảm giá {data?.discount}%</p>
                <div className="product-description">
                    Mô tả: {data?.description}
                </div>
                <div className="product-size-color">
                    <p>
                        Size: <span className="select">L</span>
                        <span className="">XL</span>
                        <span className="">XS</span>
                    </p>
                </div>
                <div className="product-color">
                    <p style={{ marginTop: 40 }}>color</p>

                    <div className="btn" style={{ display: "flex", gap: 15 }}>
                        <button
                            style={{
                                background: "#816DFA",
                                color: "#fff",
                                borderRadius: "50%",
                                height: 20,
                                width: 20,
                                border: "1px solid #fff",
                            }}
                        />
                        <button
                            style={{
                                background: "#000",
                                color: "#000",
                                borderRadius: "50%",
                                height: 20,
                                width: 20,
                                border: "1px solid #fff",
                            }}
                        />
                        <button
                            style={{
                                background: "#B88E2F",
                                color: "#000",
                                borderRadius: "50%",
                                height: 20,
                                width: 20,
                                border: "1px solid #fff",
                            }}
                        />
                    </div>
                </div>

                <div className="product-btn">
                    <button className="my-button">
                        <span className="symbol minus">-</span>
                        <span className="label">0</span>
                        <span className="symbol plus">+</span>
                    </button>
                    <button
                        className="add-to-cart"
                        onClick={() => {
                            mutate({
                                userId: user.user._id,
                                products: {
                                    productId: data._id,
                                    quantity: 1,
                                },
                            });
                        }}
                    >
                        Add To Cart
                    </button>
                    <button className="compare">
                        <Link to="/orders">Order</Link>
                    </button>
                </div>
                <div className="product-card">
                    <div className="product-card-item">
                        <div className="product-card-name">SKU</div>
                        <div className="product-card-name">Category Id</div>
                        <div className="product-card-name">Tags</div>
                        <div className="product-card-name">Share</div>
                    </div>
                    <div className="product-card-item">
                        <div className="product-card-name">: SS001</div>
                        <div className="product-card-name">
                            : {data?.category}
                        </div>
                        <div className="product-card-name">
                            : {data?.tags.join(", ")}
                        </div>
                        <div className="product-card-name">: Share</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailProduct;
