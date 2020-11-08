interface ProductDateModel {
    absoluteTime: number | string;
    year: string;
    month: string;
    day: string;
    weekDay: string;
}

interface ProductModel {
    pr_date: ProductDateModel;
    pr_category: string;
    pr_name: string;
    pr_count: number | string;
    pr_price: string | number;
    pr_image?: string;
}
