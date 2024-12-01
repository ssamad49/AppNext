export async function GET(request) {

    const serchParams = request.nextUrl.searchParams;
    const name = serchParams.get('name') || 'World';
    const age = serchParams.get('age') || '20';

    return Response.json({
        message: `Hello ${name}! You are ${age} years old.`

    });
}