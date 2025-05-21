
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

const Messages = () => {
    return (
        <section className="max-w-[1048px] mx-auto mt-8 px-4 space-y-0">
            {messages.map((msg, i) => {
                const sameSenderAsPrev = isSameSender(messages, i);
                return (
                    <div
                        key={msg.id}
                        className={`flex ${msg.outgoing ? "justify-end" : "justify-start"
                            }`}
                    >
                        <div
                            className={`
                  max-w-[70%] px-4 py-2 rounded-lg
                  ${msg.outgoing
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
    );
};

export default Messages;
