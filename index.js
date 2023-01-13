const sum_of_n_numbers = async (req, res) => {
  // health check
  if (req.params["health"] === "health") {
    res.write(JSON.stringify({ success: true, msg: "Health check success" }));
    res.end();
  }

  let sum = 0;
  try {
    const numStr = req.url.split("?")[1];
    if (numStr) {
      const nums = numStr.split("&").map((num) => num.split("=")[1]);
      sum = JSON.parse(nums[0])?.reduce((acc, v) => acc + v, 0) || 0;
    }
  } catch (error) {
    console.log({ error });

    // Add your code here
    res.write(
      JSON.stringify({ success: false, msg: `Error calculating some`, error })
    );
    res.end();

    return;
  }

  // Add your code here
  res.write(
    JSON.stringify({ success: true, msg: `Hello sum_of_n_numbers`, data: sum })
  );
  res.end();
};

export default sum_of_n_numbers;
