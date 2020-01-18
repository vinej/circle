import { action, decorate, observable, onBecomeObserved } from 'mobx'
import localStorage from '../helpers/local_storage'

class DatabaseStore {
  isOpen = false;
  isSchema = false;
  version = '0';
  isError = false;
  internalError = null;
  errorMessage = '';

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
    this.errorMessage = ''
    this.loadStatus();
  }

  close() {
    this.isOpen = false;
    this.errorMessage = ''
    this.internalError = null;
  }

  create(version) {
    this.isSchema = true;
    this.version = version;
    this.saveStatus();
  }

  update(version) {
    this.isSchema = true;
    this.version = version;
    this.saveStatus();
  }

  error(error) {
    this.errorMessage = 'Database server error'
    this.internalError = error;
  }
}

decorate(DatabaseStore,
{
  isOpen : observable,
  isSchema : observable,
  version : observable,
  isError : observable,
  errorMessage : observable,
  internalError: observable,
  open : action,
  close: action,
  create : action,
  update : action,
  error: action
});

export default new DatabaseStore();
