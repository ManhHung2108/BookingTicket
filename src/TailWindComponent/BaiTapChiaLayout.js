import React from "react";
import Card from "./Card";

export default function BaiTapChiaLayout() {
    return (
        <div className="container">
            <h1 className="text-center text-4xl text-green-500">
                WELCOME TO THE CYBERSOFT FRONT END WITH TAILWIN
            </h1>
            <div className="grid grid-cols-3 gap-4  my-3">
                <div className="text-center">
                    <Card />
                </div>
                <div className="text-center">
                    <Card />
                </div>
                <div className="text-center">
                    <Card />
                </div>
            </div>
        </div>
    );
}
