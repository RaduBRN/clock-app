const fetchLocation = async () => {
  const response = await fetch(
    `https://ipgeolocation.abstractapi.com/v1/?api_key=0105fdb02f74421099a86cd7f223882b`
  )
    .then((res) => res.json())
    .catch(() => {
      throw new Error("There was an error!");
    });

  return response;
};

export { fetchLocation };
