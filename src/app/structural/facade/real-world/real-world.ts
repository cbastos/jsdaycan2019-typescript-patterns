import { ReportsAgentFacade } from "./reportsAgentFacade";

export class Client {
    private agent = new ReportsAgentFacade();

    async showAvailableReports(): Promise<void> {
        const reports = await this.agent.loadReports();
        // Show the available reports in a dropdown
    }

    async printReport(reportId: number): Promise<void> {
        const report = await this.agent.getReport(reportId);
        document.body.innerHTML = report.template;
    }
}

