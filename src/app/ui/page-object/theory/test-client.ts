import { ProductListPageObject } from "./page-object";

export class TestClient {
    private pageObject = new ProductListPageObject();

    is_a_valid_product_id(): boolean {
        const productId = this.pageObject.getProductId();
        return productId > 0;
    }

    is_a_valid_product_name(): boolean {
        const productName = this.pageObject.getProductName();
        return productName.length < 255;
    }

    is_a_product_detail_visible(): boolean {
        this.pageObject.openDetail();
        // ...
        return false;
    }
}