const Header = () => {
    return (
        <header className="h-[84px] border-b border-b-[#DAE0E4] pt-2 pr-[18px] pb-2 pl-[18px]">
            {/* Top Bar */}
            <section className="mx-auto w-[1044px] h-[32px] flex items-center justify-between gap-6">
                {/* Left - User Info */}
                <div className="w-[929px]">
                    <div className="w-[150px] flex gap-2 items-center">
                        <span className="w-[32px] h-[32px] flex justify-center items-center bg-[#FA8F53] text-white rounded-full">
                            J
                        </span>
                        <span className="text-[18px] font-medium">Jacob Jones</span>
                    </div>
                </div>

                {/* Right - Close Button */}
                <div className="w-[91px] h-[32px] bg-[#A946BA] rounded text-white flex justify-center items-center cursor-pointer">
                    <span>Close</span>
                </div>
            </section>

            {/* Tags/Labels */}
            <section className="mx-auto w-[1044px] h-[18px] mt-4 font-inter font-normal text-[13px] tracking-normal text-[#425066]">
                <div className="flex gap-3">
                    <div><span>important</span></div>
                    <div><span>important valuable customer</span></div>
                    <div><span>VIP</span></div>
                    <div><span>SCAM</span></div>
                    <div><span>5+</span></div>
                </div>
            </section>
        </header>
    );
};

export default Header;
