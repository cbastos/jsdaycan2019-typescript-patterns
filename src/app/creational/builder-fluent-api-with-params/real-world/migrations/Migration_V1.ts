import Migration from '../Migration';

export default class Migration_v1 implements Migration {
  version = '1.0.0';
  migrate() {
    const newData = {
      version_1_structure: { num: 1 }
    };
    return newData;
  }
}