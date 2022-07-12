
import Account from './account'
import Category from './category'
interface Transaction {
    id: number,
    amount: number,
    currency: string,
    reference: string,
    date: Date,
    categoryId:string,
    accountId:string
}

export default Transaction;