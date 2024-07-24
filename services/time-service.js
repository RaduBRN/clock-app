const fetchTime = async (timezone) => {
  const response = await fetch(
    `https://worldtimeapi.org/api/timezone/${timezone}`
  )
    .then((res) => res.json())
    .catch(() => {
      throw new Error("There was an error!");
    });

  return response;
};

export { fetchTime };
