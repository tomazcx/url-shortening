import { useState } from "react";

interface ShortedLinkInterface {
    link: string;
    shorted: string;
}

export const ShortedLink = (props: ShortedLinkInterface) => {
    const [buttonState, setButton] = useState(false)

    return (
        <div className="bg-white rounded-lg py-3 pb-6 lg:pb-3 lg:px-8 flex flex-col lg:flex-row justify-between items-center w-full mb-3">
            <a href={props.link} target="_blank" className="hover:text-gray-400 transition-colors border-b pb-2 lg:border-none px-8 lg:p-0 w-full text-violet-800">{props.link}</a>
            <div className="flex flex-col lg:flex-row items-start gap-4 w-full lg:w-auto px-8 mt-4 lg:items-center lg:mt-0">
                <a href={`https://${props.shorted}`} target="_blank" className="hover:border-b border-cyan-400 text-left text-cyan-400">{props.shorted}</a>
                <span
                    className={`button rounded-lg w-full ${buttonState ? "!bg-violet-700" : "bg-cyan-400"}`}
                    onClick={() => {
                        navigator.clipboard.writeText(props.shorted)
                        setButton(true)
                    }}>
                    {buttonState ? "Copied!" : "Copy"}
                </span>
            </div>

        </div>
    )
}