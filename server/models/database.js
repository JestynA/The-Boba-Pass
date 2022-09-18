const { Pool } = require('pg')
const connectionString = 'postgres://cmusjowm:qGEerbW2LNd6H3fEzbJ_vYOiGwVrXoTZ@kashin.db.elephantsql.com/cmusjowm';

const pool = new Pool({
    connectionString: connectionString
})

module.exports = {
    query: (text, params, callback) => {
        return pool.query(text, params, callback);
    }
}
