// app/api/hello/route.ts

export async function GET() {
    return new Response(
      JSON.stringify({ message: 'Hello from the API route!' }),
      { status: 200 }
    );
  }
  