const fetchQuote = async () => {
  const response = await fetch(`https://api.quotable.io/quotes/random`);

  if (response.status === 200) {
    return response.json();
  } else {
    throw new Error("There was an error!");
  }
};

export { fetchQuote };
