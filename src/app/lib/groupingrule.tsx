import { IMessage } from "./Interfaces/Interfaces.messages";

export const isSameGroup = (messages: IMessage[], currentIndex: number): boolean => {
  if (currentIndex === 0) return false;
  
  const current = messages[currentIndex];
  const prev = messages[currentIndex - 1];
  
  const sameSender = current.senderName === prev.senderName;
  const diff = current.timestamp - prev.timestamp;
  
  return sameSender && diff <= 60000; 
};
