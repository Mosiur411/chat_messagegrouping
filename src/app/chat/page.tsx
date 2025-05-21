import TextLogo from "../components/shared/textlogo";

export default function ChatPage() {
    return (
        <main className="w-[1080px] h-[1215px] mx-auto bg-gray-100 p-5">
            {/* ============== header section ==============  */}
            <header>
                <section className="flex justify-between items-center">
                    <div className="flex justify-start items-center gap-2">
                        <TextLogo text="J" style="smalltextLogo" />
                        <p>Jacob Jones</p>
                    </div>
                    <button className="bg-[#A946BA] text-white w-[91px] h-[32px] rounded">Close</button>
                </section>
                <section className="flex gap-10 my-5">
                    <span>important</span>
                    <span>important</span>
                    <span>valuable</span>
                    <span>customer</span>
                    <span>VIP</span>
                    <span>SCAM</span>
                    <span>5+</span>
                </section>
                <hr />
            </header>
            {/* ============== profile section ==============  */}
            <section>
                <TextLogo text="J" style="bigtextLogo" />
                <div>
                    <p>Jacob Jones started the chat</p>
                </div>
            </section>
        </main>
    );
}