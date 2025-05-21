import { IMessage } from "./Interfaces/Interfaces.messages";

export const isSameGroup = (messages: IMessage[], currentIndex: number): boolean => {
    console.log("currentIndex",currentIndex)
    if (currentIndex === 0) return false;
    const current = messages[currentIndex];
    const prev = messages[currentIndex - 1];
    const diff = current.timestamp - prev.timestamp;
    return diff <= 60000;
};
