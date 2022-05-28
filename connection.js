const {Client} = require('pg')

const client = new Client({
 connectionString: "postgres://ycnxyatnixlhqq:e022b70fb0b78de17e6f73a63062b062c04aeb7efb48fd5314c630271b7e2e0c@ec2-3-211-221-185.compute-1.amazonaws.com:5432/dbu5f7h7gsan54",
 ssl: {
 rejectUnauthorized: false
 }
});

module.exports = client
