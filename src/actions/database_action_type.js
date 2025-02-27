export let databasePrefix = "database_"

export let databaseType = {
  open   : databasePrefix + 'open',
  close  : databasePrefix + 'close',
  error  : databasePrefix + 'error',
  create : databasePrefix + 'create',
  update : databasePrefix + 'update',
}
