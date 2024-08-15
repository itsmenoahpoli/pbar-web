export async function GET(request: Request) {
  return new Response("online", { status: 200, headers: { "Content-Type": "application/json" } });
}
