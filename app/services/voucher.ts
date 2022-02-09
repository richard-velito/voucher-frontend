import axios from "axios";
import { VoucherList } from "../types/voucher";

const URL = process.env.NEXT_PUBLIC_BACKEND_URL;
const TIMEOUT = parseInt(process.env.NEXT_PUBLIC_BACKEND_TIMEOUT);

const client = axios.create({
    withCredentials: true,
});

export const voucherList: VoucherList = async () => {
    const { data } = await client.get(
        `${URL}/voucher`,
    );
    return data;
};