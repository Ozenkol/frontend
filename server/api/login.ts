// ./server/api/login.ts

export default defineEventHandler(async (event) => {
  const { username, password } = (await readBody(event)) as {
    username: string;
    password: string;
  };

  const res = await fetch("http://127.0.0.1:8000/api/token/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  if (!res.ok) {
    return createError({
      statusCode: res.status,
      statusMessage: "Invalid username or password",
    });
  }

  return await res.json();
});
