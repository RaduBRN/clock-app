const fetchQuote = async () => {
  const response = await fetch(`https://zenquotes.io/api/quotes`);

  if (response.status === 200) {
    return response.json();
  } else {
    throw new Error("There was an error!");
  }
};

export { fetchQuote };
