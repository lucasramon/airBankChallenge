//* node-graphql-lesson-04/src/resolvers/query.js

import prisma from "../prisma/database";
import Transaction from "../interfaces/transaction";
import Category from "../interfaces/category";
import Account from "../interfaces/account";
import { generateRequestQuery } from "../utils/generateRequestQuery";
import RequestQuery from "../interfaces/requestQuery";
const Query = {
    transaction: async (args: Transaction) => {
        const result: Transaction = await prisma.transaction.findFirst({
            where: { id: args.id },
        });
        return result
    },

    transactions: async (args: Transaction, query:RequestQuery) => {
        const formedQuery = generateRequestQuery(query);
        const result: Array<Transaction> = await prisma.transaction.findMany(formedQuery);
        return result
    },

    account: async (args: Account) => {
        const result: Account = await prisma.account.findFirst({
            where: { id: args.id },
        });

        return result
    },

    accounts: async (args: Account) => {
        const result: Array<Account> = await prisma.account.findMany({

        });
        return result

    },

    category: async (args: Category) => {
        const result: Category = await prisma.category.findFirst({
            where: { id: args.id },
        });

        return result
    },
    categories: async (args: Category) => {
        const result: Array<Category> = await prisma.category.findMany({});
        return result
    },


};

export default Query;
