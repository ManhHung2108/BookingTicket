import React from "react";
import _ from "lodash";
export default function Include() {
    const arr = [1, 2, 3];

    console.log(_.includes(arr, 1)); //tìm kiếm 1 trong mảng

    const obj = {
        id: 1,
        name: "Nguyễn Văn A",
        age: 18,
    };

    console.log("Kết quả: ", _.includes(obj, 2)); //false ko tìm thấy value của obj = 2

    return <div>Include</div>;
}
