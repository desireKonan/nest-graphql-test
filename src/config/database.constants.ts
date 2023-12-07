export const pgDatabase = {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT) || 5432,
    user: process.env.DB_USERNAME || "postgres",
    password: process.env.DB_PASSWORD || "Desire01",
    database: process.env.DB_NAME || 'test_graphlql'
}