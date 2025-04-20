import React, { useEffect, useState } from "react";
import Toggle from "./Toggle";

function TextAnalyzer() {
    const [text, setText] = useState("");
    const [mode, setMode] = useState("white");

    const onTextChange = (e) => {
        setText(e.target.value);
    };
    const toUppercase = () => {
        const newText = text.toUpperCase();
        setText(newText);
    };
    const toLowerCase = () => {
        const newText = text.toLowerCase();
        setText(newText);
    };
    const toCamelCase = () => {
        let newText = "";
        for (let i = 0; i < text.length; i++) {
            if (i === 0 || text[i - 1] === " ") {
                newText += text[i].toUpperCase();
            } else {
                newText += text[i].toLowerCase();
            }
        }
        setText(newText);
    };
    const toCopyText = () => {
        navigator.clipboard.writeText(text);
        text === "" ? alert("Nothing to Copy") : alert("Text Copied Successfully..")
    };

    const toClearText = () => {
        setText("");
    };

    const onModeChange = () => {
        if (mode === "white") {
            setMode("black");
        } else {
            setMode("white")
        }
    }

    return (
        <>
            <div className="w-full h-screen place-content-center text-center pt-10 pb-10" style={mode === "white" ? { backgroundColor: "white", color: "black" } : { backgroundColor: "black", color: "white" }}>
                <Toggle onModeChange={onModeChange} mode={mode} />
                <div className="mx-auto ">
                    <h1 className="text-2xl font-bold pt-6 pb-6">Text Analyzer</h1>
                    <textarea className="w-[80%] p-6 row-span-12 rounded-md" style={mode === "white" ? { outline: "1px solid black", color: "black" } : { outline: "none", color: "black" }}
                        placeholder="Enter Your Text Here..."
                        onChange={onTextChange}
                        value={text}
                    ></textarea>
                    <div className="flex flex-wrap gap-4 justify-center pt-4 pb-4">
                        <button className="bg-sky-900 p-2 rounded-xl font-bold text-white" disabled={text === ""} onClick={toUppercase}>TO UPPER CASE</button>
                        <button className="bg-sky-900 p-2 rounded-xl font-bold text-white" disabled={text === ""} onClick={toLowerCase}>to lower case</button>
                        <button className="bg-sky-900 p-2 rounded-xl font-bold text-white" disabled={text === ""} onClick={toCamelCase}>To Camel Case</button>
                        <button className="bg-sky-900 p-2 rounded-xl font-bold text-white" disabled={text === ""} onClick={toCopyText}>Copy Text</button>
                        <button className="bg-sky-900 p-2 rounded-xl font-bold text-white" disabled={text === ""} onClick={toClearText}>Clear Text</button>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-orange-400">
                            Your Text Summary
                        </h1>
                        <p className="text-xl p-2">
                            Your Text contains {text.length} characters,{" "}
                            {text === "" ? 0 : text.split(/\s/).filter((ele) => { return ele.length !== 0 }).length} words and{" "}
                            {text === "" ? 0 : text.split(".").length - 1} sentenses.
                        </p>
                        <p className="text-xl">It takes <span className="pr-1 pl-1 bg-yellow-300 font-semibold text-black">{text === "" ? 0 : (text.split(/\s/).filter((ele) => { return ele.length !== 0 }).length) * 0.008} minutes</span> to read.</p>
                    </div>
                    <div className="pt-4 w-[80%] mx-auto">
                        <h1 className="text-3xl font-bold pl-1 md:text-left"><span className="text-4xl pl-1 pr-1" style={mode === "white" ? { color: "white", backgroundColor: "black" } : { color: "black", backgroundColor: "white" }}>P</span>review</h1>
                        <h1 className="p-2 text-xl pt-2">{text === "" ? "Nothing to Preview...." : text}</h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TextAnalyzer;

