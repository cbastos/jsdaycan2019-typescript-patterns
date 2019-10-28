import Migrations from "./Migrations";
import Migration_v1 from "./migrations/Migration_V1";
import Migration_v2 from "./migrations/Migration_V2";

const migrations = new Migrations()
    .add(new Migration_v1())
    .add(new Migration_v2());

const migrator = migrations.build();

migrator.migrateToLastVersion();