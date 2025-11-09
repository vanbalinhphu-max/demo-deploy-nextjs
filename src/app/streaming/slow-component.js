async function fetchData(){
    await new Promise(resolve=>setTimeout(resolve,3000));
    return "Dữ liệu đã tải từ SlowComponent";
}

export default async function SlowComponent() {
    const data = await fetchData();
    return(
        <div>
            <h3>Thành phần SlowComponent:  </h3>
            <p>{data}</p>
        </div>
    )
}