import { action, decorate, observable } from 'mobx'

class DatabaseStore {
  isOpen = false;
  isSchema = false;
  version = '';
  isError = false;
  errorDescription = '';

  async loadStatus() {
    this.isSchema = (await localStorage.getItem('circle-db-isschema')) == 'true';
    this.version = await localStorage.getItem('circle-db-version');
  }

  async saveStatus() {
    await localStorage.setItem('circle-db-status', this.isSchema.toString());
    await localStorage.setItem('circle-db-version', this.version);
  }

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }

  createSchema(version) {
    this.isSchema = true;
    this.version = version;
    this.saveStatus();
  }

  updateSchema(version) {
    this.isSchema = true;
    this.version = version;
    this.saveStatus();
  }

  error(errorDescription) {
    this.errorDescription = errorDescription;
  }
}

decorate(DatabaseStore,
{
  isOpen : observable,
  isSchema : observable,
  version : observable,
  isError : observable,
  errorDescription : observable,
  open : action,
  close: action,
  createSchema : action,
  updateSchema : action,
  error: action
});

export default new DatabaseStore();
