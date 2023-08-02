import React from "react";
import _ from "lodash";

export default function JoinDemo() {
    let arr = ["Hùng", "Minh", "Kiên"];
    let arrPerson = [
        { id: 1, name: "Hùng" },
        { id: 2, name: "Huy" },
        { id: 3, name: "Linh" },
        { id: 4, name: "Huyền" },
    ];

    //es6
    const result = arr.join("-");

    //lodash
    const res = _.join(arr, "*");
    const person = _.find(arrPerson, (item) => item.name === "Hùng"); //viết gần giống es6

    return (
        <div>
            <div>{result}</div>
            <div>{res}</div>
            <div>
                <p>
                    Name: {person.name} - id: {person.id}
                </p>
            </div>
        </div>
    );
}
