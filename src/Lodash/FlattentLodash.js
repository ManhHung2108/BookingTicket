import React from "react";
import _ from "lodash";

export default function FlattentLodash() {
    const arr = [1, [2, [3, [4]], 5]];

    const resultFlatten = _.flatten(arr);
    const resultFlattenDeep = _.flattenDeep(arr);

    console.log("resultFlatten", resultFlatten); //giải nén 1 cấp
    console.log("resultFlattenDeep", resultFlattenDeep); //giải nén nhiều cấp

    return <div>FlattentLodash</div>;
}
