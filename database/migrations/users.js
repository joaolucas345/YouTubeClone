module.exports = {
    up: async (sqlRun) => {
        const response = await sqlRun(`CREATE TABLE users (
            id serial primary key,
            name varchar(255),
            username varchar(255),
            passwordHash varchar(4000)
            );`)
    },
    down: async (sqlRun) => {
        await sqlRun("DROP TABLE users;")
    }
}
