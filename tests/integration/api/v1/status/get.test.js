test("should return 200 to api/v1/status", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();

  const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parsedUpdatedAt);

  const version = responseBody.dependencies.database.version;
  const maxConnections = responseBody.dependencies.database.max_connections;
  const activeConnections = responseBody.dependencies.database.connected;

  expect(version).toBe("16.0");
  expect(maxConnections).toBeGreaterThanOrEqual(100);
  expect(activeConnections).toBe(1);
  expect(activeConnections).toBeLessThanOrEqual(maxConnections);
});