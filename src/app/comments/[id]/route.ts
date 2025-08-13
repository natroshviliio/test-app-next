import { comments } from "../data";

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const id = (await params).id;
        const comment = comments.find((c) => c.id === Number(id));

        return Response.json(comment);
    } catch {
        return new Response("Could not find comment with specific Id");
    }
}
