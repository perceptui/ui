import { NextResponse } from "next/server";

export const GET = async () => {
    const componentsList = [
        "alert", "avatar", "badge", "button", "checkbox", "input",
        "label", "link", "password-input", "radio", "slider",
        "spinner", "switch"
    ];
    return NextResponse.json(componentsList);
}
