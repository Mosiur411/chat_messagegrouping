const ChatInput = () => {
  return (
    <section className="flex justify-center mt-8 px-4 pb-10">
      <div className="relative w-[1048px]">
        <textarea
          className="w-full h-[95px] rounded-[16px] pt-[12px] pr-[60px] pb-[8px] pl-[8px] border border-[#DAE0E4] outline-0 resize-none"
          placeholder="Write message"
        />
        <button
          type="button"
          className="absolute bottom-3 right-2 bg-[#A946BA] text-white px-4 py-1 rounded hover:bg-[#933ea6] transition"
        >
          Send
        </button>
      </div>
    </section>
  );
};

export default ChatInput;
