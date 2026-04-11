// import axios from "axios";

// const BASE_URL = "https://celebstalks.pythonanywhere.com";

// export async function startCall(
//   callerId: number,
//   receiverId: number,
//   callType: "audio" | "video" = "audio"  // ← added
// ): Promise<{ channelName: string; token: string }> {
  
//   const channelName = `call_${Date.now()}`;

//   const response = await axios.post(`${BASE_URL}/call_token/`, {
//     channel_name: channelName,
//     sender_id: callerId,
//     receiver_id: receiverId,
//     call_type: callType,      // ← "audio" or "video"
//   });

//   console.log("Token response:", response.data); // 👈 check console, share what you see

//   return {
//     channelName,
//     token: response.data.token, // 🔁 adjust key if different
//   };
// }

// export async function endCall(channelName: string): Promise<void> {
//   console.log("Call ended:", channelName);
// }


import axios from "axios";

const BASE_URL = "https://celebstalks.pythonanywhere.com";

export async function getAgoraToken(channelName: string, uid: number = 0): Promise<string> {
  const response = await fetch("/api/agora-token", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ channel_name: channelName, uid }),
  });
  const data = await response.json();
  return data.token;
}

export async function startCall(
  callerId: number,
  receiverId: number,
  callType: "audio" | "video" = "audio"
): Promise<{ channelName: string; token: string }> {
  const channelName = `call_${Date.now()}`;

  // Get Agora token from your Next.js API route
  const token = await getAgoraToken(channelName, callerId);

  // Notify Django backend
  await axios.post(`${BASE_URL}/call_token/`, {
    channel_name: channelName,
    sender_id: callerId,
    receiver_id: receiverId,
    call_type: callType,
  });

  return { channelName, token };
}

export async function endCall(channelName: string): Promise<void> {
  console.log("Call ended:", channelName);
}