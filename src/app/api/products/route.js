export async function GET() {
    const products = [
        {
            id: 1,
            title: "Product 1",
        },
        {
            id: 2,
            title: "Product 2",
        },
        {
            id: 3,
            title: "Product 3",
        },
    ]

    return Response.json(products);
}

export async function POST(request) {
    const product = await request.json();

    return Response.json(`Product ${product.title} and ${product.id} has been created`);
}

export async function PATCH(request) {
  try {
    const formData = await request.formData();
  const title = formData.get('title');
  const id = formData.get('id');

  return Response.json(`Product ${title} and ${id} has been updated`);
  }
  catch (e) {
    return Response.json(e);
  }
  
}
