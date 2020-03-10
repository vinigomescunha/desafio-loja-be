const fs = require('fs');

module.exports.getWhiteList = () => {
  if (process.env.NODE_ENV === 'test') return []; // aloco em teste para nao passar pela whitelist
  try { 
    const data = fs.readFileSync('./whitelist.json', 'utf8');
    return JSON.parse(data);
  } catch (e) { 
    throw new Error(e.message);
  }
}
