import React from "react";
import _ from "lodash";
export default function SortLodash() {
    const users = [
        { id: 3, name: "Hùng", age: 21 },
        { id: 5, name: "Huyềm", age: 18 },
        { id: 7, name: "Linh", age: 17 },
        { id: 6, name: "Đạt", age: 10 },
        { id: 2, name: "Huy", age: 19 },
        { id: 7, name: "Đạt", age: 15 },
    ];

    const resultSortByAge = _.sortBy(users, [(item) => item.age]); //sort theo tuổi
    // console.log("resultSortByAge: ", resultSortByAge);

    const res = _.sortBy(users, ["name", "age"]); //sort theo tên và tuổi
    console.log("resultSortByNameAge", res);

    return <div>SortLodash</div>;
}
