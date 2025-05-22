import ConversationInfo from "./components/conversationInfo";
import Messages from "./components/messages";
import SessionTag from "./components/sessiontag";
import Header from "./components/shared/header";

export default function Home() {
  return (
    <main className="font-inter w-[1080px] h-[1215px] mx-auto border border-[#DAE0E4] rounded flex flex-col">
      <Header />
      <ConversationInfo />
      <SessionTag />
      <div className="flex-grow overflow-y-auto" >
        <Messages />
      </div>
    </main>
  );
}
