import { MessageCircle } from "lucide-react";

function ChatBot() {
  return (
    <div className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition duration-300 ease-in-out">
      <MessageCircle size={28} />
    </div>
  );
}

export default ChatBot;
