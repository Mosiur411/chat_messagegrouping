const ChatInput = () => {
  return (
    <div className="flex items-center border-2 border-dashed border-purple-400 rounded-md p-2 w-full max-w-lg">
      <input
        type="text"
        placeholder="Write message"
        className="flex-1 outline-none border-none text-sm px-2"
      />
      <button className="text-gray-400 font-semibold hover:text-purple-600">
        Send
      </button>
    </div>
  );
};

export default ChatInput;
