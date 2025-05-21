import ConversationInfo from "./components/conversationInfo";
import Messages from "./components/messages";
import SessionTag from "./components/sessiontag";
import ChatInput from "./components/shared/chatInput";
import Header from "./components/shared/header";

export default function Home() {
  return (
    <main className="w-[1080px] h-[1215px] mx-auto border border-[#DAE0E4] rounded">
      <Header />
      <ConversationInfo />
      <SessionTag/>
      <Messages/>
      <ChatInput/>
    </main>
  );
}
