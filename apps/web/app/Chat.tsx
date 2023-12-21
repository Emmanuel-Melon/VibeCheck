import { useChatsStore } from "../src/hooks/useChatsStore";


export const ConversationComponent = () => {
  const currentChat = useChatsStore((state) => state.currentChat);
  const goToNextChat = useChatsStore((state) => state.goToNextChat);
  const goToPreviousChat = useChatsStore((state) => state.goToPreviousChat);
  const addMessageToChat = useChatsStore((state) => state.addMessageToChat);

  if (!currentChat) {
    return <p>No conversations available</p>;
  }

  return (
    <div>
      <h1>{currentChat.name}</h1>
      {currentChat.messages.map((message) => (
        <p key={message.id}>{message.text}</p>
      ))}
      <button onClick={goToPreviousChat}>Previous</button>
      <button onClick={goToNextChat}>Next</button>
      <button onClick={() => addMessageToChat({
        id: 'new-message-id', // replace with actual id
        text: 'new message', // replace with actual text
        sender: 'me', // replace with actual sender
      })}>Send Message</button>
    </div>
  );
};
