import React from "react";
import _ from "lodash";

export default function UniqLodash() {
    //Loại bỏ bớt các dữ liệu trùng nhau
    const arr = [1, 1, 2, 2, 4, 4, 5, 6];
    console.log(_.uniq(arr)); //[1,2,3,4,5,6]

    const arrPhone = [
        { id: "1", name: "iphoneX", price: 1000 },
        { id: "2", name: "iphoneXS", price: 1500 },
        { id: "2", name: "iphoneXS", price: 1500 },
        { id: "3", name: "iphoneXS Max", price: 2000 },
        { id: "3", name: "iphoneXS Max", price: 2000 },
        { id: "4", name: "iphone Pro MAX", price: 3000 },
    ];

    console.log("result", _.uniqBy(arrPhone, "id")); //Loại bỏ những phần tử có id trùng nhau

    return <div>UniqLodash</div>;
}
