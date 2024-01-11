import database from "infra/database.js";

async function status(request, response) {
  const updatedAt = new Date().toISOString();
  const getVersion = await database.query(
    "SELECT current_setting('server_version') as server_version;",
  );
  const maxConnections = await database.query("SHOW max_connections;");
  const activeConnections = await database.query(
    "SELECT count(*) FROM pg_stat_activity;",
  );

  response.status(200).json({
    updated_at: updatedAt,
    version: getVersion.rows[0].server_version,
    max_connections: parseInt(maxConnections.rows[0].max_connections),
    connected: parseInt(activeConnections.rows[0].count),
  });
}

export default status;
