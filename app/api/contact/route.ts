import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        console.log("Contact form payload:", body);

        return NextResponse.json(

            {
                success: true,
                message: "Contact form received successfully.",
            },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                message: "Invalid request body.",
            },
            { status: 400 }
        );
    }
}