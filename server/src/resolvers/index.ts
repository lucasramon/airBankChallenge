//* node-graphql-lesson-04/src/resolvers/index.js

import prisma from "../prisma/database";
import Query from "./query";
import Transaction from "../interfaces/transaction";
import Category from "../interfaces/category";
import Account from "../interfaces/account";


const Transaction = {
    id: (parent: Transaction, args: Transaction) => parent.id,
    amount: (parent: Transaction) => parent.amount,
    currency: (parent: Transaction) => parent.currency,
    reference: (parent: Transaction) => parent.reference,
    date: (parent: Transaction) => parent.date,

}

const Account = {
    id: (parent: Account) => parent.id,
    name: (parent: Account) => parent.name,

};


const Category = {
    id: (parent: Category) => parent.id,
    name: (parent: Category) => parent.name,
    color: (parent: Category) => parent.color,

};

const resolvers = {
    Transaction,
    Account,
    Category,
    Query,
};


export default resolvers
