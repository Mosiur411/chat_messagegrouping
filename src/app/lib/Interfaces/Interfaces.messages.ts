export type IMessage = {
  id: string;
  type: 'incoming' | 'outgoing';
  text: string;
  timestamp: number;
  senderName: string;
  avatar: string;
};