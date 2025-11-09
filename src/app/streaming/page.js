import { Suspense } from "react";

import SlowComponent from "./slow-component";

function LoadingFallback() {
    return (
        <div>
            <h3>Đang tải thành phần tốn thời gian</h3>
            <h2>Vui lòng đợi</h2>
        </div>
    )
}

export default function StreamingExamplePage() {
    return (
        <div>
            <h1>Đây là 1 phần của trang hiển thị ngay lập tức</h1>

            <Suspense fallback={<LoadingFallback />}>
                <SlowComponent />
            </Suspense>

            <h1>Đây là 1 phần khác của trang hiển thị ngay lập tức</h1>

        </div>
    )
}