import React from "react";

export default function DemoPadding() {
    return (
        <div className="container">
            <div className="p-4 py-5 bg-red-400">DemoPadding</div>
        </div>
    );
}
/**
 * Padding(kí hiệu: p) và margin(kí hiệu m)
 * class name: p(m)-n,  p(m)t-n,  p(m)l-n,  p(m)b-n,  p(m)r-n,  p(m)x-n,  p(m)y-n
 * Với: p: padding
 *      m: margin
 *      n: là số từ 0-96 đơn vị là(1 = 0.25rem)
 *
 * 1: 0.25rem
 * 2: 0.5rem
 * 3: 0.75rem...
 * đến 96: 24rem
 *
 * => Sử dụng giống như boostrap
 */
