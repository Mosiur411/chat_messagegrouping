
const SessionTag = () => {
    return (
        <section className="w-[1080px] h-[30px] relative">
            <div className="h-[1px] w-full bg-[#DAE0E4]"></div>
            <div className="absolute top-[-14px] bg-white left-0 right-0 bottom-0 mx-auto w-[167px] h-[30px] flex justify-center items-center rounded-[55px] py-[6px] border border-[#DAE0E4] gap-[10px]">
                <span className="text-[#425066] font-normal text-[12px] leading-[18px] tracking-normal text-center align-middle">
                    Session 1 - Nov 17, 2023
                </span>
            </div>
        </section>
    );
};

export default SessionTag;
