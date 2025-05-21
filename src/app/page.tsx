import TextLogo from "./components/shared/textlogo";
type Message = {
  sender: string;
  text: string;
  outgoing: boolean;
};
const messages = [
  { id: 1, sender: "Jacob Jones", text: "Hey, how are you?", outgoing: false },
  { id: 2, sender: "You", text: "I'm good, thanks! How about you?", outgoing: true },
  { id: 3, sender: "You", text: "Are you coming today?", outgoing: true },
  { id: 4, sender: "Jacob Jones", text: "Yes, I'll be there.", outgoing: false },
  { id: 5, sender: "Jacob Jones", text: "Looking forward to it.", outgoing: false },
];

function isSameSender(messages: Message[], currentIndex: number): boolean {
  if (currentIndex === 0) return false;
  return messages[currentIndex].sender === messages[currentIndex - 1].sender;
}
export default function Home() {
  return (
    <main className="w-[1080px] h-[1215px] mx-auto">
      {/* Header */}
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

      {/* Conversation Info */}
      <section className="flex justify-start items-center gap-10 py-10 px-4">
        <TextLogo text="J" style="bigtextLogo" />
        <div>
          <p className="text-2xl">Jacob Jones started the chat</p>
          <p>Joined via Messenger</p>
        </div>
      </section>

      {/* Session Tag */}
      <section className="w-[1080px] h-[30px] relative px-4">
        <div className="h-[1px] w-full bg-[#DAE0E4]"></div>
        <div className="absolute top-[-14px] bg-white left-0 right-0 bottom-0 mx-auto w-[167px] h-[30px] flex justify-center items-center rounded-[55px] px-[14px] py-[6px] border border-[#DAE0E4] gap-[10px]">
          <span className="font-inter text-[#425066] font-normal text-[12px] leading-[18px] tracking-normal text-center align-middle">
            Session 1 - Nov 17, 2023
          </span>
        </div>
      </section>

      {/* Messages */}
      <section className="max-w-[1048px] mx-auto mt-8 px-4 space-y-0">
        {messages.map((msg, i) => {
          const sameSenderAsPrev = isSameSender(messages, i);
          return (
            <div
              key={msg.id}
              className={`flex ${
                msg.outgoing ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`
                  max-w-[70%] px-4 py-2 rounded-lg
                  ${
                    msg.outgoing
                      ? "bg-[#A946BA] text-white rounded-tr-none"
                      : "bg-[#E2E8F0] text-[#1A202C] rounded-tl-none"
                  }
                  ${sameSenderAsPrev ? "mt-1" : "mt-4"}
                `}
              >
                {!sameSenderAsPrev && (
                  <div className="text-xs font-semibold mb-1 select-none">
                    {msg.sender}
                  </div>
                )}
                <div>{msg.text}</div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Message Input */}
      <section className="flex justify-center mt-8 px-4 pb-10">
        <div className="relative w-[1048px]">
          <textarea
            className="w-full h-[95px] rounded-[16px] pt-[12px] pr-[60px] pb-[8px] pl-[8px] border border-[#DAE0E4] outline-0 resize-none"
            placeholder="Write message"
          />
          <button
            type="button"
            className="absolute bottom-2 right-2 bg-[#A946BA] text-white px-4 py-1 rounded hover:bg-[#933ea6] transition"
          >
            Send
          </button>
        </div>
      </section>
    </main>
  );
}
