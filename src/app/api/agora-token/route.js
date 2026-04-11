// // import { RtcTokenBuilder, RtcRole } from "agora-access-token";

// // export async function POST(req) {
// //   try {
// //     const body = await req.json();
// //     const { channel_name, uid } = body;

// //     if (!channel_name) {
// //       return Response.json({ error: "channel_name required" }, { status: 400 });
// //     }

// //     const APP_ID = "ceabxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
// //     const APP_CERTIFICATE = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";

// //     const role = RtcRole.PUBLISHER;
// //     const expirationTimeInSeconds = 3600;

// //     const currentTimestamp = Math.floor(Date.now() / 1000);
// //     const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds;

// //     const token = RtcTokenBuilder.buildTokenWithUid(
// //       APP_ID,
// //       APP_CERTIFICATE,
// //       channel_name,
// //       uid || 0,
// //       role,
// //       privilegeExpiredTs,
// //     );

// //     return Response.json({
// //       token,
// //       app_id: APP_ID,
// //     });
// //   } catch (err) {
// //     return Response.json({ error: err.message }, { status: 500 });
// //   }
// // }

// import { RtcTokenBuilder, RtcRole } from "agora-access-token";

// export async function POST(req) {
//   try {
//     const { channel_name, uid } = await req.json();

//     if (!channel_name) {
//       return Response.json({ error: "channel_name required" }, { status: 400 });
//     }

//     const APP_ID = "6b021724b8c6456a8e3fcadf06a278a7"; // ✅ your real App ID
//     const APP_CERTIFICATE = "babdeebfd0c540c488550725f6594ae5"; // ⚠️ replace

//     const role = RtcRole.PUBLISHER;
//     const expirationTimeInSeconds = 3600;

//     const currentTimestamp = Math.floor(Date.now() / 1000);
//     const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds;

//     const token = RtcTokenBuilder.buildTokenWithUid(
//       APP_ID,
//       APP_CERTIFICATE,
//       channel_name,
//       uid || 0,
//       role,
//       privilegeExpiredTs,
//     );

//     return Response.json({
//       token,
//       app_id: APP_ID, // 🔥 important
//     });
//   } catch (err) {
//     return Response.json({ error: err.message }, { status: 500 });
//   }
// }

import {
  RtcTokenBuilder,
  RtcRole,
  RtmTokenBuilder,
  RtmRole,
} from "agora-access-token";

const APP_ID = "6b021724b8c6456a8e3fcadf06a278a7";
const APP_CERTIFICATE = "babdeebfd0c540c488550725f6594ae5";

export async function POST(req) {
  try {
    const body = await req.json();
    const { channel_name, uid, type } = body;

    const expirationTimeInSeconds = 3600;
    const currentTimestamp = Math.floor(Date.now() / 1000);
    const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds;

    // ✅ RTM token — for chat
    if (type === "rtm") {
      const token = RtmTokenBuilder.buildToken(
        APP_ID,
        APP_CERTIFICATE,
        String(uid),
        RtmRole.Rtm_User,
        privilegeExpiredTs,
      );
      return Response.json({ token });
    }

    // ✅ RTC token — for calls (existing)
    if (!channel_name) {
      return Response.json({ error: "channel_name required" }, { status: 400 });
    }

    const token = RtcTokenBuilder.buildTokenWithUid(
      APP_ID,
      APP_CERTIFICATE,
      channel_name,
      uid || 0,
      RtcRole.PUBLISHER,
      privilegeExpiredTs,
    );

    return Response.json({ token, app_id: APP_ID });
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}
