export class AssetsService {
    getJsonFromFile(fileName: string): Promise<any> {
        return fetch(new Request(`./my-assets-path/${fileName}.json`))
            .then(response => response.json());
    }
}

