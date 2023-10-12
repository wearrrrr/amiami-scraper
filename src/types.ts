type AmiAmiItem = {
    gcode: string,
    gname: string,
    thumb_url: string,
    thumb_alt: string,
    thumb_title: string,
    min_price: number,
    max_price: number,
    c_price_taxed: number,
    maker_name: string,
    saleitem: number,
    condition_flag: number,
    list_preorder_available: number,
    list_backorder_available: number,
    list_store_bonus: number,
    list_amiami_limited: number,
    instock_flg: number,
    order_closed_flg: number,
    element_id: any,
    salestatus: any,
    salestatus_detail: any    
    releasedate: string,
    jancode: string,
    preorderitem: number,
    saletopitem: number,
    resale_flg: number,
    preowned_sale_flg: number,
    for_women_flg: number,
    genre_moe: number,
    cate6: any,
    cate7: any,
    buy_flg: number,
    buy_price: number,
    buy_remarks: any,
    stock_flg: number,
    image_on: number,
    image_category: string,
    image_name: string,
    metaalt: any
}

type AmiAmiResponse = {
    RSuccess: boolean,
    RValue: null,
    RMessage: string,
    search_result: { total_results: number }
    items: Array<AmiAmiItem>
}

export { AmiAmiItem, AmiAmiResponse }