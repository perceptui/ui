import { NextResponse } from "next/server";

export const GET = async () => {
    const componentsList = [
        "alert", "avatar", "badge", "button", "checkbox", "input",
        "label", "link", "password-input", "radio", "slider",
        "spinner", "switch", "loader", "wheel-loader"
    ];
    return NextResponse.json(componentsList);
}
