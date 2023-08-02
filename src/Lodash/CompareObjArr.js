import React from "react";
import _ from "lodash";

export default function CompareObjArr() {
    const arrA = [1, 2];
    const arrB = [1, 2];
    const result = _.isEqual(arrA.sort(), arrB.sort()); //so sánh như bình thường khác vs es6 so sánh tham chiếu
    console.log(result);

    //So sánh 2 mảng obj giống hay khác nhau
    let arrPerson1 = [
        { id: 1, name: "Hùng" },
        { id: 2, name: "Huy" },
    ];
    let arrPerson2 = [
        { id: 1, name: "Hùng" },
        { id: 2, name: "Hằng" },
        { id: 2, name: "Linh" },
    ];
    const res = _.differenceWith(arrPerson2, arrPerson1, _.isEqual);
    console.log(res);
    //trả về mảng [] chứa các giá trị khác nhau của cái mảng còn lại (arr1 khác gì với arr2 thì log ra phần tử khác của arr2)

    return <div>CompareObjArr</div>;
}
