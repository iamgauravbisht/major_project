export const predict = async (data) => {
  return await fetch("http://127.0.0.1:8000/predict", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};
export const performance = async () => {
  return await fetch("http://127.0.0.1:8000/performance", {
    method: "GET",
  });
};
