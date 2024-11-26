const fetchQuote = async () => {
  const response = await fetch(
    `https://corsproxy.io/?https%3A%2F%2Fzenquotes.io%2Fapi%2Fquotes`
  );

  if (response.status === 200) {
    return response.json();
  } else {
    throw new Error("There was an error!");
  }
};

export { fetchQuote };
