import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
    const componentsList = [
        "alert", "avatar", "badge", "button", "checkbox", "input",
        "label", "link", "password-input", "radio", "slider",
        "spinner", "switch"
    ];
    return NextResponse.json(componentsList);
}
