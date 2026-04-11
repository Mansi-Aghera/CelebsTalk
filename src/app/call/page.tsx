// // // "use client";

// // // import { useEffect, useRef } from "react";
// // // import { useSearchParams, useRouter } from "next/navigation";
// // // import { endCall } from "@/lib/callService";

// // // export default function CallPage() {
// // //   const params = useSearchParams();
// // //   const router = useRouter();

// // //   const channelName = params.get("channel");
// // //   const type = params.get("type"); // "audio" or "video"
// // //   const mode = params.get("mode"); // "caller" or "receiver"

// // //   const clientRef = useRef<any>(null);
// // //   const tracksRef = useRef<any[]>([]);

// // //   useEffect(() => {
// // //     joinCall();
// // //     return () => {
// // //       leaveCall();
// // //     };
// // //   }, []);

// // //   const joinCall = async () => {
// // //     if (!channelName) return;

// // //     // Dynamically import Agora (avoids SSR issues)
// // //     const AgoraRTC = (await import("agora-rtc-sdk-ng")).default;

// // //     const client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
// // //     clientRef.current = client;

// // //     // 🔁 Replace with your Agora App ID
// // //     const APP_ID = "ceab1234567890abcdef1234567890ab";
// // //       console.log("APP_ID:", APP_ID); // 👈 add this




// // //     // Antima Mishra
// // // // 02-02-2026 16:17
// // // // app_key: 4110019589#1655134 Org_name : 4110019589 app_name: 1655134
// // //     // const TOKEN = null; // replace with token from /call_token/ response
// // //     const getToken = async () => {
// // //   const res = await fetch("/api/agora-token", {
// // //     method: "POST",
// // //     body: JSON.stringify({
// // //       channel_name: channelName,
// // //       uid: 1,
// // //     }),
// // //   });
// // // console.log("res::::::>>>>>>",res)
// // //   return res.json();
// // // };

// // // const { token, app_id } = await getToken();

// // //     await client.join(APP_ID, channelName, token, null);
// // //     console.log("token:::::",token)

// // //     if (type === "video") {
// // //       const [mic, cam] = await AgoraRTC.createMicrophoneAndCameraTracks();
// // //       tracksRef.current = [mic, cam];
// // //       cam.play("local-video");
// // //       await client.publish([mic, cam]);
// // //     } else {
// // //       const mic = await AgoraRTC.createMicrophoneAudioTrack();
// // //       tracksRef.current = [mic];
// // //       await client.publish([mic]);
// // //     }

// // //     client.on("user-published", async (user: any, mediaType: any) => {
// // //       await client.subscribe(user, mediaType);
// // //       if (mediaType === "video") user.videoTrack.play("remote-video");
// // //       if (mediaType === "audio") user.audioTrack.play();
// // //     });
// // //   };

// // //   const leaveCall = async () => {
// // //     tracksRef.current.forEach((t) => t.close());
// // //     await clientRef.current?.leave();
// // //     if (channelName) await endCall(channelName);
// // //     router.push("/");
// // //   };

// // //   return (
// // //     <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
// // //       <p className="mb-4 text-sm text-gray-400">
// // //         {mode === "caller" ? "Calling..." : "Connected"} · {type} call
// // //       </p>

// // //       {type === "video" && (
// // //         <div className="flex gap-4 mb-8">
// // //           <div id="local-video"  className="w-48 h-36 bg-black rounded-lg" />
// // //           <div id="remote-video" className="w-48 h-36 bg-black rounded-lg" />
// // //         </div>
// // //       )}

// // //       {type === "audio" && (
// // //         <div className="flex flex-col items-center gap-4 mb-8">
// // //           <div className="w-24 h-24 rounded-full bg-green-700 flex items-center justify-center text-4xl">
// // //             🎙️
// // //           </div>
// // //           <p className="text-gray-300">Audio call in progress...</p>
// // //         </div>
// // //       )}

// // //       <button
// // //         onClick={leaveCall}
// // //         className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full text-lg transition-colors"
// // //       >
// // //         End Call
// // //       </button>
// // //     </div>
// // //   );
// // // }


// // "use client";

// // import { useEffect, useRef } from "react";
// // import { useSearchParams, useRouter } from "next/navigation";

// // export default function CallPage() {
// //   const params = useSearchParams();
// //   const router = useRouter();

// //   const channelName = params.get("channel");
// //   const type = params.get("type"); // audio | video

// //   const clientRef = useRef<any>(null);
// //   const tracksRef = useRef<any[]>([]);

// //   useEffect(() => {
// //     if (!channelName) return;

// //     joinCall();

// //     return () => {
// //       leaveCall();
// //     };
// //   }, [channelName]);

// //   const getToken = async () => {
// //     const res = await fetch("/api/agora-token", {
// //       method: "POST",
// //       headers: {
// //         "Content-Type": "application/json",
// //       },
// //       body: JSON.stringify({ channel_name: channelName, uid: 1 }),
// //     });

// //     return res.json();
// //   };

// //   const joinCall = async () => {
// //     const AgoraRTC = (await import("agora-rtc-sdk-ng")).default;

// //     const client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
// //     clientRef.current = client;

// //     // ✅ Get token from API
// //     const { token, app_id } = await getToken();

// //     console.log("APP_ID:", app_id);
// //     console.log("TOKEN:", token);
// //     console.log("CHANNEL:", channelName);

// //     // 🔥 IMPORTANT FIX (use app_id from API)
// //     await client.join(app_id, channelName!, null, null);

// //     if (type === "video") {
// //       const [mic, cam] = await AgoraRTC.createMicrophoneAndCameraTracks();
// //       tracksRef.current = [mic, cam];

// //       cam.play("local-video");

// //       await client.publish([mic, cam]);
// //     } else {
// //       const mic = await AgoraRTC.createMicrophoneAudioTrack();
// //       tracksRef.current = [mic];

// //       await client.publish([mic]);
// //     }

// //     client.on("user-published", async (user: any, mediaType: any) => {
// //       await client.subscribe(user, mediaType);

// //       if (mediaType === "video") {
// //         user.videoTrack.play("remote-video");
// //       }

// //       if (mediaType === "audio") {
// //         user.audioTrack.play();
// //       }
// //     });
// //   };

// //   const leaveCall = async () => {
// //     tracksRef.current.forEach((t) => t.close());
// //     await clientRef.current?.leave();
// //     router.push("/");
// //   };

// //   return (
// //     <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
// //       <h2 className="mb-4">Call Connected</h2>

// //       {type === "video" && (
// //         <div className="flex gap-4 mb-6">
// //           <div id="local-video" className="w-48 h-36 bg-gray-800 rounded" />
// //           <div id="remote-video" className="w-48 h-36 bg-gray-800 rounded" />
// //         </div>
// //       )}

// //       {type === "audio" && <p>Audio Call...</p>}

// //       <button
// //         onClick={leaveCall}
// //         className="bg-red-500 px-6 py-2 rounded"
// //       >
// //         End Call
// //       </button>
// //     </div>
// //   );
// // }

// "use client";

// import { useEffect, useRef } from "react";
// import { useSearchParams, useRouter } from "next/navigation";
// import { endCall, getAgoraToken } from "@/lib/callService";

// const APP_ID = "6b021724b8c6456a8e3fcadf06a278a7"; // your real Agora App ID

// export default function CallPage() {
//   const params = useSearchParams();
//   const router = useRouter();

//   const channelName = params.get("channel");
//   const type = params.get("type");
//   const mode = params.get("mode");

//   const clientRef = useRef<any>(null);
//   const tracksRef = useRef<any[]>([]);

//   useEffect(() => {
//     joinCall();
//     return () => { leaveCall(); };
//   }, []);

//   const joinCall = async () => {
//     if (!channelName) return;

//     const AgoraRTC = (await import("agora-rtc-sdk-ng")).default;
//     const client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
//     clientRef.current = client;

//     // ✅ Get real token
//     const token = await getAgoraToken(channelName, 0);
//     console.log("Joining with token:", token);

//     await client.join(APP_ID, channelName, token, null);

//     if (type === "video") {
//       const [mic, cam] = await AgoraRTC.createMicrophoneAndCameraTracks();
//       tracksRef.current = [mic, cam];
//       cam.play("local-video");
//       await client.publish([mic, cam]);
//     } else {
//       const mic = await AgoraRTC.createMicrophoneAudioTrack();
//       tracksRef.current = [mic];
//       await client.publish([mic]);
//     }

//     client.on("user-published", async (user: any, mediaType: any) => {
//       await client.subscribe(user, mediaType);
//       if (mediaType === "video") user.videoTrack.play("remote-video");
//       if (mediaType === "audio") user.audioTrack.play();
//     });
//   };

//   const leaveCall = async () => {
//     tracksRef.current.forEach((t) => t.close());
//     await clientRef.current?.leave();
//     if (channelName) await endCall(channelName);
//     router.push("/");
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
//       <p className="mb-4 text-sm text-gray-400">
//         {mode === "caller" ? "Calling..." : "Connected"} · {type} call
//       </p>

//       {type === "video" && (
//         <div className="flex gap-4 mb-8">
//           <div id="local-video"  className="w-48 h-36 bg-black rounded-lg" />
//           <div id="remote-video" className="w-48 h-36 bg-black rounded-lg" />
//         </div>
//       )}

//       {type === "audio" && (
//         <div className="flex flex-col items-center gap-4 mb-8">
//           <div className="w-24 h-24 rounded-full bg-green-700 flex items-center justify-center text-4xl">
//             🎙️
//           </div>
//           <p className="text-gray-300">Audio call in progress...</p>
//         </div>
//       )}

//       <button
//         onClick={leaveCall}
//         className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full text-lg transition-colors"
//       >
//         End Call
//       </button>
//     </div>
//   );
// }

"use client";

import { useEffect, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { endCall, getAgoraToken } from "@/lib/callService";

const APP_ID = "6b021724b8c6456a8e3fcadf06a278a7";

export default function CallPage() {
  const params = useSearchParams();
  const router = useRouter();

  const channelName = params.get("channel");
  const type = params.get("type");
  const mode = params.get("mode");

  const clientRef = useRef<any>(null);
  const tracksRef = useRef<any[]>([]);
  const joinedRef = useRef(false);   // ✅ track if joined
  const mountedRef = useRef(false);  // ✅ prevent double run

  useEffect(() => {
    if (mountedRef.current) return; // ✅ skip second StrictMode call
    mountedRef.current = true;
    joinCall();

    return () => {
      if (joinedRef.current) leaveCall();
    };
  }, []);

  const joinCall = async () => {
    if (!channelName) return;

    try {
      const AgoraRTC = (await import("agora-rtc-sdk-ng")).default;
      const client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
      clientRef.current = client;

      const token = await getAgoraToken(channelName, 0);
      console.log("Joining channel:", channelName);

      await client.join(APP_ID, channelName, token, null);
      joinedRef.current = true; // ✅ mark as joined

      if (type === "video") {
        const [mic, cam] = await AgoraRTC.createMicrophoneAndCameraTracks();
        tracksRef.current = [mic, cam];
        cam.play("local-video");
        await client.publish([mic, cam]);
      } else {
        const mic = await AgoraRTC.createMicrophoneAudioTrack();
        tracksRef.current = [mic];
        await client.publish([mic]);
      }

      client.on("user-published", async (user: any, mediaType: any) => {
        await client.subscribe(user, mediaType);
        if (mediaType === "video") user.videoTrack.play("remote-video");
        if (mediaType === "audio") user.audioTrack.play();
      });

      client.on("user-unpublished", (user: any) => {
        console.log("User left:", user.uid);
      });

    } catch (err) {
      console.error("Join failed:", err);
    }
  };

  const leaveCall = async () => {
    try {
      tracksRef.current.forEach((t) => t.close());
      tracksRef.current = [];
      await clientRef.current?.leave();
      joinedRef.current = false;
      if (channelName) await endCall(channelName);
    } catch (err) {
      console.error("Leave error:", err);
    }
    router.push("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <p className="mb-4 text-sm text-gray-400">
        {mode === "caller" ? "Calling..." : "Connected"} · {type} call
      </p>

      {type === "video" && (
        <div className="flex gap-4 mb-8">
          <div id="local-video"  className="w-48 h-36 bg-black rounded-lg" />
          <div id="remote-video" className="w-48 h-36 bg-black rounded-lg" />
        </div>
      )}

      {type === "audio" && (
        <div className="flex flex-col items-center gap-4 mb-8">
          <div className="w-24 h-24 rounded-full bg-green-700 flex items-center justify-center text-4xl">
            🎙️
          </div>
          <p className="text-gray-300">Audio call in progress...</p>
        </div>
      )}

      <button
        onClick={leaveCall}
        className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full text-lg transition-colors"
      >
        End Call
      </button>
    </div>
  );
}