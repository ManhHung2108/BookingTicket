import React from "react";
import _ from "lodash";

export default function FillLodash() {
    let arrPerson = [
        { id: 1, name: "Hùng" },
        { id: 2, name: "Huy" },
        { id: 3, name: "Linh" },
        { id: 4, name: "Huyền" },
    ];

    //chèn(thay thế) vào vị trí thứ 1 đến vị trí thứ 2 trong mảng
    _.fill(arrPerson, { id: 5, name: "Minh" }, 1, 3);

    console.log(arrPerson);

    return <div>FillLodash</div>;
}
