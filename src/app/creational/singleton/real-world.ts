interface ReportTemplate {
    id: string;
    layout: string;
}

class ReportTemplatesAgent {
    constructor(
        private baseUrl: string,
        private applicationId: string
    ) { }

    getReporTemplates(): Promise<Array<ReportTemplate>> {
        return fetch(
            new Request('https://my-reports-api.com/get-all-report-templates')
        ).then(response => response.json());
    }
}

class ReportTemplatesAgentFactory {
    private static instance: ReportTemplatesAgent;
    private static config: { baseUrl: string, applicationId: string };

    static use(baseUrl: string, applicationId: string) {
        this.config = { baseUrl, applicationId };
    }

    static build(): ReportTemplatesAgent {
        if (!this.config) {
            throw new Error('You should configure the factory before using it.')
        }
        this.instance = this.instance || new ReportTemplatesAgent(
            this.config.baseUrl,
            this.config.applicationId
        );
        return this.instance;
    }
}

export class Client {
    initializeApp(): void {
        ReportTemplatesAgentFactory.use(
            'https://my-base-url', 'my-app-id');
    }

    async generateReports(): Promise<void> {
        const reportTemplates =
            await ReportTemplatesAgentFactory
                .build().getReporTemplates();
        // Apply datasource over the report templates.
    }
}
