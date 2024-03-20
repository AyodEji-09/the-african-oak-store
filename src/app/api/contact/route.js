import { NextResponse } from "next/server";
// const client = require("@sendgrid/mail");
var postmark = require("postmark");
import { adminOrderNotification } from "../../_lib/emailTemplates/adminOrderNotification";
import { checkMessage } from "../../_lib/emailTemplates/checkMessage";
import { useShoppingCart } from "use-shopping-cart";

// client.setApiKey(process.env.SENDGRID_API_KEY);
const adminEmail = process.env.ADMIN_EMAIL;
var serverToken = process.env.POSTMARK_API_KEY;
var client = new postmark.ServerClient(serverToken);

export async function POST(request) {
  const body = await request.json();
  const { firstname, email, subject, message } = body;
  // if (!firstname && !email && !subject && !message) {
  //   return NextResponse.json(
  //     {
  //       data: [],
  //       message: "error",
  //     },
  //     { status: 400 }
  //   );
  // }
  try {
    client.sendEmail({
      From: "contact@superoagrobase.com",
      To: 'contact@superoagrobase.com',
      Subject: "Test",
      HtmlBody: "<p>Hello from Postmark!</p>",
    });
    // const adminMail = {
    //   personalizations: [
    //     {
    //       to: [
    //         {
    //           email: adminEmail,
    //           name: "The Oak African Store",
    //         },
    //       ],
    //     },
    //   ],
    //   from: {
    //     email: "olu@panfinance.net",
    //     name: "The Oak African Store",
    //   },
    //   subject: "Order Notification",
    //   content: [
    //     {
    //       type: "text/html",
    //       value: adminOrderNotification(firstname, email, message),
    //     },
    //   ],
    // };
    // const res = await client.send(adminMail);
    return NextResponse.json(
      { data: res, message: "success" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { data: error, message: "error" },
      { status: 400 }
    );
  }
}
