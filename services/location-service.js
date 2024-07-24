const fetchLocation = async () => {
  const response = await fetch(`https://ip-api.com/json/`)
    .then((res) => res.json())
    .catch(() => {
      throw new Error("There was an error!");
    });

  return response;
};

export { fetchLocation };
