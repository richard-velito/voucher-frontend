export type Voucher = {
    id: number;
    label: string;
    path: string;
    description: string;
    important: boolean;
};

export type Vouchers = {
    vouchers: [Voucher];
};


export type VoucherList = () => Promise<Vouchers>;