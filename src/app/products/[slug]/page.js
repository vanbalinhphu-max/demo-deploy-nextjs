import { revalidateProductPath } from "./actions";
export async function generateStaticParams() {
    const products = ["product-1", "product-2", "product-3"];
    return products.map(product => ({
        slug: product
    }))
}

export default async function ProductPage({ params }) {
    const { slug } = await params;
    const timestamp = new Date().toISOString();
    return (
        <div>
            <h1>Trang sản phẩm chi tiết: {slug}</h1>
            <p>Thời gian cập nhật trang: {timestamp}</p>

            <form action={revalidateProductPath}>
                <input type="hidden" name="path" value={`/products/${slug}`} />
                <button type="submit">Xóa cache trang này ({slug})</button>
            </form>
        </div>

    )
}