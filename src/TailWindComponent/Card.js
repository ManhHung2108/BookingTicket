import React from "react";

export default function Card() {
    return (
        <div className="card w-full">
            <div className="main  bg-gray-300 py-8 rounded-tl-lg rounded-tr-lg px-7">
                <h3 className="text-purple-500 font-bold text-xs">Category</h3>
                <p className="text-black font-bold text-xl">
                    Cyber soft frontend developer
                </p>
                <p className="font-thin text-black text-xl my-2">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ipsa corrupti blanditiis velit ullam nihil fugiat, quasi,
                    mollitia ad minus aliquid illo repellendus quam recusandae
                    sunt! Est, dolorem vitae? Facere, laboriosam!
                </p>
            </div>
            <div className="footer rounded-bl-lg rounded-br-lg flex justify-between bg-gray-200 w-full px-2">
                <p className="mt-4">1 USD</p>
                <button className="rounded-lg bg-purple-600 text-white p-2 my-2 hover:bg-gray-300 hover:text-purple-600 transition duration-300">
                    Register
                </button>
            </div>
        </div>
    );
}
