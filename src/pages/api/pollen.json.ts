
import { fetchDataFromDatabase } from '@db/operations.ts';

export async function GET({ params }) {
  const id = params.id;
  const product = await fetchDataFromDatabase();

  if (!product) {
    return new Response(null, {
      status: 404,
      statusText: 'Not found'
    });
  }

  return new Response(
    JSON.stringify(product), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
}
