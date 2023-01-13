

const sum_of_n_numbers = async (req, res) => {

  // health check
  if (req.params["health"] === "health") {
    res.write(JSON.stringify({success: true, msg: "Health check success"}))
    res.end()
  }

  // Add your code here
  res.write(JSON.stringify({success: true, msg: `Hello sum_of_n_numbers`}))
  res.end()
  
}

export default sum_of_n_numbers
