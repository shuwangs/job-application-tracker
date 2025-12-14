export default (sequelize, Sequelize) => {
    const jobApps = sequelize.define("jobApps", {
        id: {
            type: Sequelize.NUM,
        },
        company: {
            type: Sequelize.STRING,
        },
        position: {
            type: Sequelize.STRING,
        },
        dateApplied: {
            type: Sequelize.DATE,
        },
        status: {
            type: Sequelize.STRING,
        },
    });
    return jobApps;
};