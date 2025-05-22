import Image from "next/image";

const Header = () => {

    const tagsection =[
        {
            title:"important",
            path:"/assets/icon/tag.svg",
        },
        {
            title:"important valuable customer",
            path:"/assets/icon/tag.svg",
        },
        {
            title:"VIP",
            path:"/assets/icon/tag.svg",
        },
        {
            title:"SCAM",
            path:"/assets/icon/tag.svg",
        },
    ]

    return (
        <header className="h-[84px] border-b border-b-[#DAE0E4] pt-2 pr-[18px] pb-2 pl-[18px]">
            <section className="mx-auto w-[1044px] h-[32px] flex items-center justify-between gap-6">
                <div className="w-[929px]">
                    <div className="flex gap-2 items-center">
                        <span className="w-[32px] h-[32px] flex justify-center items-center bg-[#FA8F53] text-white rounded-full">
                            J
                        </span>
                        <span className="text-[18px] font-medium">Jacob Jones</span>
                    </div>
                </div>

                <div className="w-[91px] h-[32px] bg-[#A946BA] rounded-[10] py-1.5 text-white flex justify-evenly items-center cursor-pointer">
                     <Image src={'/assets/icon/close.svg'} width={16} height={16} alt={'close'}/>
                    <span>Close</span>
                </div>
            </section>

            <section className="mx-auto w-[1044px] h-[18px] mt-4 leading-none font-normal text-[13px] tracking-normal text-[#425066]">
                <div className="flex gap-3">
                    {
                        tagsection?.map((tag,index)=> <div className="flex justify-center items-center gap-1" key={index}>
                        <Image src={tag?.path} width={14} height={14} alt={tag.title}/>
                        <span className="leading-none text-[13px]">{tag?.title}</span>
                        
                    </div>)
                    }
                    <div  className="flex justify-center items-center gap-1"><span className="leading-none text-[13px]">5+</span></div>
                </div>
            </section>
        </header>
    );
};

export default Header;
