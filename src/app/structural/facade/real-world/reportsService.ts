import { IReport } from "./IReport";

export class ReportsService {
    async getAll(): Promise<IReport[]> {
        const reports = await fetch(
            new Request('http://my-reports-rest-api/reports'))
            .then(response => response.json());

        return reports.map((report, index) =>
            ({
                id: index,
                template: 'a-html-report-template',
                name: report.name
            }));
    }
}

