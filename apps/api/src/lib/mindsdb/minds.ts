import MindsDB from "mindsdb-js-sdk";

export const connect = async () => {
  try {
    // No authentication needed for self-hosting
    await MindsDB.connect({
      host: "http://127.0.0.1:47334",
      user: "",
      password: "",
    });
    console.log("connected");
  } catch (error) {
    // Failed to connect to local instance
    console.log(error);
  }
};


const connectPostgres = async () => {
    const connectionParams = {
        'user': 'user',
        'port': 3306,
        'password': 'MindsDBUser123!',
        'host': 'db-demo-data.cwoyhfn6bzs0.us-east-1.rds.amazonaws.com',
        'database': 'public'
      }
      try {
        const pgDatabase = await MindsDB.Databases.createDatabase(
          'psql_datasource',
          'postgres',
          connectionParams);
      } catch (error) {
        // Couldn't connect to database.
      }
}