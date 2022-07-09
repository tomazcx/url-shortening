
interface NavFooterInterface {
    title: string;
    items: string[];
}

export const NavFooter = (props: NavFooterInterface) => {

    return (
        <div className="flex flex-col gap-8 lg:justify-start h-full text-sm mb-12 lg:mb-0">
            <span className="font-bold text-center lg:text-left">{props.title}</span>
            <nav className="flex flex-col gap-4 text-gray-300 ">
                {props.items.map(item => <span key={item} className='nav-footer text-center lg:text-left'>{item}</span>)}
            </nav>
        </div>
    )
}