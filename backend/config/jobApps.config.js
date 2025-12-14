export default {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "jobApps1234",
    DB: "jobApps",
    dialect: "postgres",
    PORT: 5432,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
};