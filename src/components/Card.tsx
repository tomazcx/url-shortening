
interface CardProps {
    text: string;
    title: string;
    icon: string;
    topPos: string;
}

export const Card = (props: CardProps) => {
    return (
        <div className={`flex flex-col items-center lg:items-start relative top-${props.topPos}`}>
            <div className="p-4 z-10 bg-violet-700 rounded-full relative top-8 lg:left-8 flex justify-center items-center">
                <img src={props.icon} alt="Icon card" />
            </div>
            <div className="flex rounded h-[290px] sm:h-[270px] px-8 py-16  flex-col items-center lg:items-start justify-center bg-white ">

                <span className="mb-4  text-xl text-center lg:text-left text-violet-900 font-bold">{props.title}</span>

                <span className="text-gray-400  text-center lg:text-left">{props.text}</span>
            </div>
        </div>
    )

}