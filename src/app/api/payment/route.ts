import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

// POST handler
export async function POST(req: Request) {
    try {
        const body = await req.json(); // Parse JSON body
        const { items } = body;

        // Convert items to Stripe format
        const lineItems = items.map((item: any) => ({
            price_data: {
                currency: "usd",
                product_data: {
                    name: item.name,
                    images: [item.imageURL], 
                },
                unit_amount: item.price * 100, // Convert to cents
            },
            quantity: item.quantity || 1, // Default quantity to 1
        }));

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: lineItems, // ✅ Pass the mapped items
            mode: "payment",
            success_url: `${req.headers.get("origin")}/Success`,
            cancel_url: `${req.headers.get("origin")}/Cancel`,
        });

        return NextResponse.json({ url: session.url });
    } catch (error: any) {
        console.error("Stripe Error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

// Method Not Allowed for other HTTP methods
export async function GET() {
    return NextResponse.json(
        { error: "Method Not Allowed" },
        { status: 405 }
    );
}
