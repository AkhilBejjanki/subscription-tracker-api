// // import arcjet, { shield, detectBot, tokenBucket } from "@arcjet/node";
// // import { ARCJET_KEY } from "./env.js";

// // const aj = arcjet({
// //   key: ARCJET_KEY,
// //   rules: [
// //     shield({ mode: "LIVE" }),
// //     detectBot({
// //       mode: "LIVE",
// //       allow: ["CATEGORY:SEARCH_ENGINE"],
// //     }),
// //     tokenBucket({
// //       mode: "LIVE",
// //       refillRate: 5, // Refill 5 tokens per interval
// //       interval: 10, // Refill every 10 seconds
// //       capacity: 10, // Bucket capacity of 10 tokens
// //     }),
// //   ],
// // });

// export default aj;
import arcjet, { shield, detectBot, tokenBucket } from "@arcjet/node";
import { ARCJET_KEY } from "./env.js";

const aj = arcjet({
  key: ARCJET_KEY,
  characteristics: [
    (req) => ({
      ip:
        req.headers["x-forwarded-for"]?.split(",")[0] ||
        req.headers["x-real-ip"] ||
        req.socket?.remoteAddress,
    }),
  ],

  rules: [
    shield({ mode: "LIVE" }),
    detectBot({
      mode: "LIVE",
      allow: ["CATEGORY:SEARCH_ENGINE"],
    }),
    tokenBucket({
      mode: "LIVE",
      refillRate: 5,
      interval: 10,
      capacity: 10,
    }),
  ],
});

export default aj;
