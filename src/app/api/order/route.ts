import { NextResponse } from "next/server";
import { createClient } from "@sanity/client";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      firstName,
      lastName,
      imageURL,
      userId,
      email,
      phone,
      address,
      city,
      province,
      zip,
      country,
      cartItems,
      totalAmount,
      paymentMethod,
      orderDate,
          } = body;

    if (!firstName || !lastName || !email || !phone || !address || !totalAmount || !paymentMethod) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Sanity client setup
    const client = createClient({
      projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || " ",
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
      useCdn: false,
      apiVersion: "2021-03-25",
      token: process.env.SANITY_API_TOKEN || " ",
    });




    // Save order in Sanity
    const order = await client.create({
      _type: "order",
      userId,
      firstName,
      lastName,
      imageURL,
      email,
      phone,
      address,
      city,
      province,
      zip,
      country,
      cartItems,
      totalAmount,
      paymentMethod,
      orderDate,
      status: "Pending",
    });

    console.log("Order saved in Sanity:", order);

    return NextResponse.json({ message: "Order created successfully", order }, { status: 201 });
  } catch (error) {
    console.error("Sanity Error:", error);
    return NextResponse.json({ error: "Failed to save order" }, { status: 500 });
  }
}
