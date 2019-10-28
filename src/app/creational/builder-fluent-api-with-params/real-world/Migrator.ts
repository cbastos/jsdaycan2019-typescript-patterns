import Migrations from './Migrations';
import DataStorage from './DataStorage';

export default class Migrator {
  constructor(
    private storage: DataStorage,
    private migrations: Migrations
  ) { }

  migrateToLastVersion(): void {
    const current_storage_version = this.storage.get('db_pm:version');
    if (current_storage_version) {
      let current_storage_data = this.storage.get('db_pm:data');
      if (current_storage_data) {
        this.migrations.getGreaterThan(current_storage_version).forEach((migration) => {
          current_storage_data = migration.migrate(current_storage_data);
        });
        this.storage.set('db_pm:data', current_storage_data);
        this.storage.set('db_pm:version', this.migrations.last().version);
      }
    }
  }
}
