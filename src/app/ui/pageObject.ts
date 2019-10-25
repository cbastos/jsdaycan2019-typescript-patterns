
// class ProductListPageObject {
//     getProductId(): number {
//         const productId = this.getHTMLElementByClass('id')[0].textContent;
//         return parseInt(productId);
//     }

//     getProductName(): string {
//         const productName = this.getHTMLElementByClass('name')[0].textContent;
//         return productName;
//     }

//     openDetail(): void {
//         const viewDetailButton = this.getHTMLElementByClass('view-detail')[0];
//         viewDetailButton.click();
//     }

//     private getHTMLElementByClass(className: string): Array<HTMLElement> {
//         return [new HTMLElement()]; // TODO: Use your preferred HTML API
//     }
// }

// class TestClient {
//     private pageObject = new ProductListPageObject();

//     is_a_valid_product_id(): boolean {
//         const productId = this.pageObject.getProductId();
//         return productId > 0;
//     }

//     is_a_valid_product_name(): boolean {
//         const productName = this.pageObject.getProductName();
//         return productName.length < 255;
//     }

//     is_a_product_detail_visible(): boolean {
//         this.pageObject.openDetail();
//         // ...
//         return false;
//     }
// }

