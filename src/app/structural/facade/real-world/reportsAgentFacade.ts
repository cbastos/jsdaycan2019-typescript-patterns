import { ReportsService } from "./reportsService";
import { AssetsService } from "./assetsService";
import { IReport } from "./IReport";
import { AppModeService } from "./appModeService";

export class ReportsAgentFacade {
    private reportsService = new ReportsService();
    private assetsService = new AssetsService();
    private appModeService = new AppModeService();

    async loadReports(): Promise<IReport[]> {
        let reports: IReport[] = [];
        if (this.appModeService.isOffline()) {
            reports = await this.assetsService.getJsonFromFile('reports');
            localStorage.setItem('reports', JSON.stringify(reports));
        } else {
            reports = await this.reportsService.getAll();
        }
        return reports;
    }

    async getReport(reportId: number): Promise<IReport> {
        let reports: IReport[] = [];
        if (this.appModeService.isOffline()) {
            reports = JSON.parse(localStorage.getItem('reports'));
        } else {
            reports = await this.reportsService.getAll();
        }
        return reports.find(r => r.id === reportId);
    }
}

