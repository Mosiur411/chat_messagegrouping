"use client"; // Only if you manage client-side state here

import { useState } from "react";
import { IMessage } from "../lib/Interfaces/Interfaces.messages";
import { DefaultMessages } from "../lib/messages";
import ChatInput from "./shared/chatInput";
import { formatTime } from "../lib/formatTime";

const Messages = () => {
    const [newMessages, setNewMessages] = useState<IMessage[]>(DefaultMessages);

    const handleSendMessage = (text: string) => {
        const newMessage: IMessage = {
            id: Date.now().toString(),
            type: "outgoing",
            text,
            timestamp: Date.now(),
            senderName: "Mosiur",
            avatar: "/avatars/mosiur.png",
        };

        setNewMessages((prev) => [...prev, newMessage]);
    };

    return (
        <>
            <section className="max-w-[1048px] mx-auto mt-8 px-4 space-y-0">
                {newMessages.map((msg, i) => {
                    const isOutgoing = msg.type === "outgoing";
                    //const sameGroupAsPrev = isSameGroup(newMessages, i);

                    return (
                        <div
                            key={i}
                            className={`mb-2 flex ${isOutgoing ? "justify-end" : "justify-start"}`}
                        >
                            <div><div className={`text-[11px] text-[#6C7584] select-none flex ${isOutgoing ? "justify-end" : "justify-start"} gap-2`}>
                                        <span>{formatTime(msg.timestamp)}</span>
                                        <span>•</span>
                                        <span>{msg.senderName}</span>
                                    </div>
                                

                                <div
                                    className={`
                                        w-fit
                                     px-4 py-2 rounded-lg
                                        ${isOutgoing
                                            ? "bg-[#D9E8FF] text-[#232F40] rounded"
                                            : "bg-[#F1F4F5] text-[#232F40] rounded"}
                                       `}
                                >

                                    <div className="font-normal text-sm leading-5 align-middle">{msg.text}</div>
                                </div>


                            </div>

                        </div>
                    );
                })}
            </section>
            <ChatInput onSend={handleSendMessage} />
        </>
    );
};

export default Messages;
