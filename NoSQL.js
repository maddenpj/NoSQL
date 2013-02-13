var ControlPort = require('control-port').ControlPort;

var control = new ControlPort('NoSQL');
control.start(6000);
console.log('NoSQL DB started\nConsole on port 6000');

var DB = {};


var store = function(k,v) {
  DB[k] = v;
  return "STORED: ("+k+", "+v+")";
}

var get = function(k) {
  if(!k in DB) return "UNDEF";

  return DB[k];
}

control.register('store', store);
control.register('STORE', store);
control.register('get', get);
control.register('GET', get);
control.register('shutdown', function () {
      process.exit(0);
},'Shuts down process');

control.register('menu', function () {
  return 'NoSQL <=> Console\n\n\tSTORE  -  Store a key/value pair\n\n\tGET - Retrieve a value by key\n\n';
});


var SQLkw = [
'ABORT',
'abort',
'ALTER',
'alter',
'ANALYZE',
'analyze',
'BEGIN',
'begin',
'CHECKPOINT',
'checkpoint',
'CLOSE',
'close',
'CLUSTER',
'cluster',
'COMMENT',
'comment',
'COMMIT',
'commit',
'COPY',
'copy',
'CREATE',
'create',
'DEALLOCATE',
'deallocate',
'DECLARE',
'declare',
'DELETE',
'delete',
'DISCARD',
'discard',
'DO',
'do',
'DROP',
'drop',
'END',
'end',
'EXECUTE',
'execute',
'EXPLAIN',
'explain',
'FETCH',
'fetch',
'GRANT',
'grant',
'INSERT',
'insert',
'LISTEN',
'listen',
'LOAD',
'load',
'LOCK',
'lock',
'MOVE',
'move',
'NOTIFY',
'notify',
'PREPARE',
'prepare',
'PREPARE',
'prepare',
'REASSIGN',
'reassign',
'REINDEX',
'reindex',
'RELEASE',
'release',
'RESET',
'reset',
'REVOKE',
'revoke',
'ROLLBACK',
'rollback',
'SAVEPOINT',
'savepoint',
'SECURITY',
'security',
'SELECT',
'select',
'SET',
'set',
'SHOW',
'show',
'START',
'start',
'TRUNCATE',
'truncate',
'UNLISTEN',
'unlisten',
'UPDATE',
'update',
'VACUUM',
'vacuum',
'VALUES',
'values'
];

for(var i = 1; i < SQLkw.length; i++)
{
  var kw = SQLkw[i];
  control.register(kw, function () {
    return 'NO!'
  });
}
