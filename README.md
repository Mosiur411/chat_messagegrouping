### ✅ **Chat Interface Task Completion Report**

## 🔗 Links

- 🚀 **Live Demo**: [chat-messagegrouping.vercel.app](https://chat-messagegrouping.vercel.app)
- 📁 **GitHub Repository**: [github.com/Mosiur411/chat_messagegrouping](https://github.com/Mosiur411/chat_messagegrouping)
- 🧬 **Git Clone**:
  ```bash
  git clone https://github.com/Mosiur411/chat_messagegrouping.git


#### 📄 **Task Requirements**

---

#### 1. **Message Structure**
- ✅ Created an array of message objects
- ✅ Each message contains the following:
  - `id`
  - `type` (incoming / outgoing)
  - `text` (message content)
  - `timestamp`
  - `senderName` / `receiverName` (as needed)
  - `avatar`

---

#### 2. **UI Behavior**
- ✅ Rendered a basic chat interface using the message array
- ✅ Outgoing messages appear on the **right**
- ✅ Incoming messages appear on the **left**
- ✅ Messages grouped by sender
- ✅ Applied Message Grouping Rule:
  - Messages from the same sender appear as a group **if sent within 1 minute**
  - New group starts if **time gap exceeds 1 minute**, even if sender is same
- ✅ Pixel-perfect design implemented
  - Fonts, colors, spacing all match the design reference

---

#### 3. **User Interaction**
- ✅ Input field added for typing and sending new messages
- ✅ On send:
  - New message is added to the array
  - UI **auto-scrolls to bottom** to show latest message
- ✅ Initial load shows chat **scrolled to the bottom**, showing most recent message

---

📌 **Status:** All tasks completed successfully ✅
