export interface List {
    status: string;
    request_id: string;
    data : dataItem[];
}

export interface dataItem {
    id : string;
    name : string;
}