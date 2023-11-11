test("should return 200 to api/v1/status", async () =>{
  const response = await fetch("http://localhost:3000/api/v1/status")
  expect(response.status).toBe(200)
})