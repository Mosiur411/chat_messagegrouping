"use client";

import Image from "next/image";
import { useState } from "react";

const ChatInput = ({ onSend }: { onSend: (text: string) => void }) => {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (text.trim() === "") return;
    onSend(text); // ✅ Call parent's function
    setText("");  // clear input
  };

  let textfind = text?.length >= 1 ? false : true



  return (
    <section className="flex justify-center mt-8 px-4 pb-2">
      <div className="relative w-[1048px]">
        <textarea
          className="w-full h-[95px] rounded-[16px] pt-[12px] pr-[60px] pb-[8px] pl-[8px] border border-[#DAE0E4] outline-0 resize-none"
          placeholder="Write message"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          type="button"
          onClick={handleSend}
          disabled={textfind}
          className={`absolute cursor-pointer bottom-3 right-2 ${!textfind ? 'bg-[#A946BA] hover:bg-[#933ea6] text-white ' : 'text-[#44546F]'}  py-1.5 rounded-[10]   transition `}
        >
          <div className="w-[87px] flex justify-evenly">
            <Image src={`${!textfind ? '/assets/icon/paperplanetilt.svg' : '/assets/icon/paper-airplane.svg'}`} className="text-white" width={20} height={20} alt={'airplane'} />
            <span className="text-[14px]">Send</span>
          </div>
        </button>
      </div>
    </section>
  );
};

export default ChatInput;
