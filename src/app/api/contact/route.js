import { NextResponse } from "next/server";
const client = require("@sendgrid/mail");
import { adminOrderNotification } from "../../_lib/emailTemplates/adminOrderNotification";
import { checkMessage } from "../../_lib/emailTemplates/checkMessage";
import { useShoppingCart } from "use-shopping-cart";

client.setApiKey(process.env.SENDGRID_API_KEY);
const adminEmail = process.env.ADMIN_EMAIL;

export async function POST(request) {
  const body = await request.json();
  const { firstname, email, subject, message,address,city,state,country,payment,cartDetails,cartCount,totalPrice} = body;
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
    const adminMail = {
      personalizations: [
        {
          to: [
            {
              email: adminEmail,
              name: "The Oak African Store",
            },
          ],
        },
      ],
      from: {
        email: "olu@panfinance.net",
        name: "The Oak African Store",
      },
      subject: "Order Notification",
      content: [
        {
          type: "text/html",
          value: checkMessage(firstname, email, message,address,city ,state,country,payment,cartCount,cartDetails,totalPrice),
        },
      ],
    };
    const res = await client.send(adminMail);
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
