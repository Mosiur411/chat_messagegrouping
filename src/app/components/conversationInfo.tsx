import Image from "next/image";
import TextLogo from "./shared/textlogo";

const ConversationInfo = () => {
    return (
       <section className="flex justify-start items-center gap-10 py-10 px-4">
        <TextLogo text="J" style="bigtextLogo" />
        <div>
          <p className="text-2xl font-[500]">Jacob Jones started the chat</p>
          <p className="flex justify-start items-center gap-2 mt-3">
            <Image src={'/assets/icon/group.svg'} width={22} height={22} alt={'close'}/>
            
            Joined via Messenger</p>
        </div>
      </section>
    );
};

export default ConversationInfo;
