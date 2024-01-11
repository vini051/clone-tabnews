test("should return 200 to api/v1/status", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  expect(responseBody).toBeDefined();

  const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parsedUpdatedAt);

  expect(responseBody.version).toBe("16.0");
  expect(responseBody.max_connections).toBeGreaterThanOrEqual(100);
  expect(responseBody.connected).toBeGreaterThanOrEqual(5);
  expect(responseBody.connected).toBeLessThanOrEqual(
    responseBody.max_connections,
  );
});
