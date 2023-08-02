import React from "react";
import _ from "lodash";

export default function LastFirstLodash() {
    let arrPerson = [
        { id: 1, name: "Hùng" },
        { id: 2, name: "Huy" },
        { id: 3, name: "Linh" },
        { id: 4, name: "Huyền" },
    ];

    const firstItem = _.first(arrPerson); //lấy ra phần tử đầu tiên của mảng
    const lastItem = _.last(arrPerson); //lấy ra phần tử cuối cùng trong mảng

    const arr = [
        ["001", "Alice"],
        ["002", "Pop"],
    ];

    const [idFirst, nameFirst] = _.first(arr);
    const [idLast, nameLast] = _.last(arr);

    return (
        <div className="container">
            <div>FirstItem: {firstItem.name}</div>
            <div>LastItem: {lastItem.name}</div>

            <h3 className="font-bold text-lg mt-5">Mảng phức tập hơn</h3>
            <div>
                FirstItem: {idFirst}-{nameFirst}
            </div>
            <div>
                LastItem: {idLast}-{nameLast}
            </div>
        </div>
    );
}
