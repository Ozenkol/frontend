// ./server/api/getProducts.ts

export default defineEventHandler(async (event) => {
  try {
    const data = await $fetch("http://127.0.0.1:8000/api/products/");
    console.log(data)
    return data
  } catch (error) {
    console.log("error", error);
    return {
      products: [],
    };
  }
});
