import { Pool } from 'pg';

const connectionString ='connection_here';

const db = new Pool({ connectionString });

export default db;