import { comments } from "./data";

export async function GET() {
    return Response.json(comments);
}

export async function POST(req: Request) {
    const comment = await req.json()!;

    const newComment = {
        id: Math.max(...comments.map((c) => c.id)) + 1,
        text: comment.text,
    };

    comments.push(newComment);

    return new Response(JSON.stringify(newComment), {
        headers: {
            "Content-Type": "application/json",
        },
        status: 201,
    });
}
