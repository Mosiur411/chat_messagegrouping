import TextLogo from "./shared/textlogo";

const ConversationInfo = () => {
    return (
       <section className="flex justify-start items-center gap-10 py-10 px-4">
        <TextLogo text="J" style="bigtextLogo" />
        <div>
          <p className="text-2xl">Jacob Jones started the chat</p>
          <p>Joined via Messenger</p>
        </div>
      </section>
    );
};

export default ConversationInfo;
