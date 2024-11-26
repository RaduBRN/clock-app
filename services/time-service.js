const fetchTime = async (timezone) => {
  const response = await fetch(
    `https://timeapi.io/api/time/current/zone?timeZone=${timezone}`
  )
    .then((res) => res.json())
    .catch(() => {
      throw new Error("There was an error!");
    });

  return response;
};

export { fetchTime };
