import { NextResponse } from "next/server";

const FORMSPREE_ENDPOINT = process.env.FORMSPREE_ENDPOINT || "https://formspree.io/f/mbdnlrol";

function normalizeValue(value: unknown): string {
    return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const name = normalizeValue(body?.name);
        const email = normalizeValue(body?.email);
        const phone = normalizeValue(body?.number || body?.phone);
        const enquiry = normalizeValue(body?.enquiry);
        const selectedService = normalizeValue(body?.selectedService);
        const selectedProduct = normalizeValue(body?.selectedProduct);
        const message = normalizeValue(body?.message);

        const errors: Record<string, string> = {};

        if (!name) errors.name = "Name is required.";
        if (!email) errors.email = "Email is required.";
        if (!phone) errors.phone = "Phone is required.";
        if (!enquiry) errors.enquiry = "Enquiry is required.";
        if (!message) errors.message = "Message is required.";
        if (enquiry === "service" && !selectedService) {
            errors.selectedService = "Please select a service.";
        }
        if (enquiry === "product" && !selectedProduct) {
            errors.selectedProduct = "Please select a product.";
        }

        if (Object.keys(errors).length > 0) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Please fill out the required fields.",
                    errors,
                },
                { status: 400 }
            );
        }

        const payload = {
            name,
            email,
            phone,
            enquiry,
            selectedService,
            selectedProduct,
            message,
            _subject: `New enquiry from ${name}`,
            _replyto: email,
        };

        const response = await fetch(FORMSPREE_ENDPOINT, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error("Formspree error:", response.status, errorText);
            return NextResponse.json(
                {
                    success: false,
                    message: "Unable to send the form right now. Please try again.",
                },
                { status: 502 }
            );
        }

        return NextResponse.json(
            {
                success: true,
                message: "Thanks! Your message has been sent successfully.",
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Contact form submission failed:", error);
        return NextResponse.json(
            {
                success: false,
                message: "Invalid request body.",
            },
            { status: 400 }
        );
    }
}