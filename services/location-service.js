const fetchLocation = async () => {
  const response = await fetch(`http://ip-api.com/json/`)
    .then((res) => res.json())
    .catch(() => {
      throw new Error("There was an error!");
    });

  return response;
};

export { fetchLocation };
