import { FunctionComponent, useState, useEffect } from 'react';

import { voucherList } from '../services/voucher';
import { Voucher, Vouchers } from '../types/voucher';

const VoucherList: FunctionComponent = () => {

    const [vouchers, setVouchers] = useState<Voucher[]>([]);

    useEffect(() => {
        voucherList()
            .then((response: Vouchers) => {
                console.log ('[DEBUG] voucherList', response);
                setVouchers(response.vouchers);
            })
            .catch(error => {
            });
    }, []);

    return (
        <div className='row mt-4'>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {vouchers.map((voucher,index)=>{
                        return (
                            <tr key={index}>
                                <td>{voucher.id}</td>
                                <td>{voucher.label}</td>
                                <td>{voucher.description}</td>
                                <td>{voucher.important}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default VoucherList;