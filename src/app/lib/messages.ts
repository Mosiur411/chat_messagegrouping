import { IMessage } from "./Interfaces/Interfaces.messages";

export const DefaultMessages: IMessage[] = [
  {
    id: '1',
    type: 'incoming',
    text: 'Hi there!',
    timestamp: 1716180000000,
    senderName: 'Alice',
    avatar: '/avatars/alice.png',
  },
  {
    id: '2',
    type: 'incoming',
    text: 'How are you?',
    timestamp: 1716180030000,
    senderName: 'Alice',
    avatar: '/avatars/alice.png',
  },
  {
    id: '3',
    type: 'outgoing',
    text: 'I’m good, thanks!',
    timestamp: 1716180600000,
    senderName: 'Mosiur',
    avatar: '/avatars/mosiur.png',
  },
];