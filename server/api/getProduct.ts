// ./server/api/getProduct.ts

export default defineEventHandler(async (event) => {
  const { id } = getQuery(event);
  console.log("id", id);

  try {
    const data = await $fetch(`http://127.0.0.1:8000/api/products/${id}`);
    return data;
  } catch (error) {
    console.log("error", error);
    return {};
  }
});
