import { NextResponse } from "next/server";
var postmark = require("postmark");
import { checkMessage } from "../../_lib/emailTemplates/checkMessage";

const adminEmail = process.env.ADMIN_EMAIL;
var serverToken = process.env.POSTMARK_API_KEY;
var client = new postmark.ServerClient(serverToken);

export async function POST(request) {
  const body = await request.json();
  const {
    name,
    email,
    address,
    city,
    state,
    country,
    payment,
    cartDetails,
    totalPrice,
  } = body;
  if (!firstname && !email && !subject && !message) {
    return NextResponse.json(
      {
        data: [],
        message: "error",
      },
      { status: 400 }
    );
  }
  try {
    client.sendEmail({
      Name: "The Oak African Store",
      From: "info@shopoakstore.com",
      To: useremail,
      Subject: "Order Notification",
      HtmlBody: checkMessage(
        name,
        email,
        address,
        city,
        state,
        country,
        payment,
        cartDetails,
        totalPrice
      ),
    });
    client.sendEmail({
      Name: "The Oak African Store",
      From: "info@shopoakstore.com",
      To: adminEmail,
      Subject: "Order Notification",
      HtmlBody: checkMessage(
        name,
        email,
        address,
        city,
        state,
        country,
        payment,
        cartDetails,
        totalPrice
      ),
    });
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
