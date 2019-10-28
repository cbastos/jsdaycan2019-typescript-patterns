import Migrator from './Migrator';
import DataStorage from './DataStorage';
import Migration from './Migration';

export default class Migrations {
    private migrations = [];

    last() {
        return this.migrations[this.migrations.length - 1];
    }

    add(migration: Migration) {
        this.migrations.push(migration);
        return this;
    }

    getGreaterThan(version: string) {
        const { migrations } = this;
        const migrationOfVersionIndex = migrations.indexOf(migrations.filter(m => m.version === version)[0]);
        return migrations.slice(migrationOfVersionIndex + 1, migrations.length);
    }

    build() {
        return new Migrator(new DataStorage(), this);
    }
}