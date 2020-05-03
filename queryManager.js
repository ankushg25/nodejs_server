const queryList = {
    USER_LIST: `SELECT * FROM auth_user`,
    DB_TABLE_SCHEMA: 'SELECT * FROM sqlite_master where name = ?',
    DB_TABLES_LIST: `SELECT DISTINCT tbl_name FROM sqlite_master`
};

exports.queries = queryList;