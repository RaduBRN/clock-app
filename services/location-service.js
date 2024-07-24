const fetchLocation = async () => {
  const response = await fetch(
    `https://corsproxy.io/?http%3A%2F%2Fip-api.com%2Fjson`
  )
    .then((res) => res.json())
    .catch(() => {
      throw new Error("There was an error!");
    });

  return response;
};

export { fetchLocation };
