import Migration from '../Migration';

export default class Migration_v2 implements Migration {
  version = '2.0.0';
  migrate(v1Data) {
    const v2Data = {
      version_2_structure: {
        number2: v1Data.version_1_structure.num
      }
    };
    return v2Data;
  }
}