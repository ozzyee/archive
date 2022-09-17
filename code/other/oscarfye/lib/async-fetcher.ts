export async function fetcher(url: string, args?: any) {
  let result = null;

  const formBody = Object.keys(args)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(args[key]))
    .join("&");

  if (formBody) {
    // Pass url and additional arguments to fetch
    result = await fetch(url, {
      method: "POST", // HTTP Method
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8", // This matches the option we'd set if we called the endpoint in Postman
      },
      body: formBody, // req.body
    });
  } else {
    result = await fetch(url);
  }

  const data = await result.json();


  return data;
}