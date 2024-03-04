import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import stripe from "../../_lib/stripe";

export async function POST(req, res) {
  const headersList = headers();
  const { cartDetails } = await req.json();
  const cartDetailsArray = Object.values(cartDetails);

  const lineItems = cartDetailsArray.map((item) => {
    return {
      price_data: {
        currency: item.currency,
        product_data: {
          name: item.name,
        },
        unit_amount: item.price,
      },
      quantity: item.quantity,
    };
  });

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${headersList.get("origin")}/payment_success`,
      cancel_url: `${headersList.get("origin")}/payment_failure`,
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (err) {
    console.log("Checkout Route error", err);
    return NextResponse.json({ error: "Error creating checkout session" });
  }
}
