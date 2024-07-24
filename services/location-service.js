const fetchLocation = async () => {
  const response = await fetch(
    `https://api.ipbase.com/v2/info?apikey=ipb_live_muqvGjpMx2w5gjyjF2ZzNZ1YCnNL2tVOEjtZPKtj`
  )
    .then((res) => res.json())
    .catch(() => {
      throw new Error("There was an error!");
    });

  return response;
};

export { fetchLocation };
