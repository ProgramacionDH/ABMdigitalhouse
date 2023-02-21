const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('AmbDH', 'root', '', {
    host: '3306',
    dialect:'mysql'

  });

  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  async function testConnetion (){
    try {
      await sequelize.authenticate();
      console.log('conecto bien');
    } catch (error) {
      console.error('no va:', error);
    }

  }

  testConnetion ()