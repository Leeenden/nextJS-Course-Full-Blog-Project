const { PHASE_DEVELOPMENT_SERVER } = require("next/constants")

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        db_url: `${process.env.REACT_APP_MONGO_DEV_URL}`,
      },
    }
  }

  return {
    env: {
      db_url: `${process.env.REACT_APP_MONGO_PROD_URL}`,
    },
  }
}
