export class ProductListPageObject {
    getProductId(): number {
        const productId = this.getHTMLElementByClass('id')[0].textContent;
        return parseInt(productId);
    }

    getProductName(): string {
        const productName = this.getHTMLElementByClass('name')[0].textContent;
        return productName;
    }

    openDetail(): void {
        const viewDetailButton = this.getHTMLElementByClass('view-detail')[0];
        viewDetailButton.click();
    }

    private getHTMLElementByClass(className: string): Array<HTMLElement> {
        return [new HTMLElement()];
    }
}
