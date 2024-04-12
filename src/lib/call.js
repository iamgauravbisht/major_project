export const predict = async (data) => {
  return await fetch(
    "https://major-project-backend-ooal.onrender.com/predict",
    {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((res) => res.json());
};
export const performance = async () => {
  return await fetch(
    "https://major-project-backend-ooal.onrender.com/performance",
    {
      method: "GET",
    }
  );
};
