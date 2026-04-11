import axios from "axios";

const BASE_URL = "https://celebstalks.pythonanywhere.com";

// Get all chats for a user
export async function getChats(userId: number) {
  const res = await axios.get(`${BASE_URL}/chat/`, {
    params: { user_id: userId },
  });
  return res.data;
}

// Get messages between user and influencer
export async function getMessages(userId: string) {
  const res = await axios.get(`${BASE_URL}/chat_message/user_id/${userId}/`);
  return res.data;
}

// Get messages by influencer
export async function getMessagesByInfluencer(influencerId: string) {
  const res = await axios.get(`${BASE_URL}/chat_message/influencer_id/${influencerId}/`);
  return res.data;
}

// Send a message
export async function sendMessage(senderId: number, receiverId: number, message: string) {
  const res = await axios.post(`${BASE_URL}/chat_message/`, {
    sender_id: senderId,
    receiver_id: receiverId,
    message,
  });
  return res.data;
}

// Get Agora RTM token for chat
export async function getChatToken(userId: string) {
  const res = await axios.post(`${BASE_URL}/agora/token`, {
    uid: userId,
  });
  return res.data.token;
}