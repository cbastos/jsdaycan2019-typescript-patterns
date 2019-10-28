export default interface Migration {
    version: string;
    migrate: (data: any) => any;
}