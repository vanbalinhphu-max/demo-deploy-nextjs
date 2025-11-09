import { clearTimestampCache } from "./action";
export const dynamic = "force-dynamic";
export const revalidate = 0;

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL

async function fetchData() {
  console.log("fetching data");
  const res = await fetch(`${baseUrl}/api/timestamp`, {
    cache: "force-cache",
    next: { tags: ["timestamp"] },
  });
  if (!res.ok) {
    throw new Error("failed to fetch data");
  }
  return res.json();
}
export default async function CachedDataPage() {
  const data1 = await fetchData();
  return (
    <div>
      <h1>Dữ liệu đã được cache</h1>
      <p>Timestamp1 : {data1.timestamp}</p>
      <form action={clearTimestampCache}>
        <button>Xóa cache timestamp tag</button>
      </form>
    </div>
  );
}
