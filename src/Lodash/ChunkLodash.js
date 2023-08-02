import React from "react";
import _ from "lodash";

export default function ChunkLodash() {
    const arr = ["id", "1", "name", "Hùng", "info", "cybersoft"];

    //tạo một mảng mới từ mảng đã có, gồm các mảng con có số phần tử tùy chọn truyền vào
    const result = _.chunk(arr, 2);
    console.log(result); //[[id, 1], [name, Hùng], [info, cybersoft]]

    return <div>{JSON.stringify(result)}</div>;
}
