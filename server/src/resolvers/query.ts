//* node-graphql-lesson-04/src/resolvers/query.js

import prisma from "../prisma/database";
import Transaction from "../interfaces/transaction";
import Category from "../interfaces/category";
import Account from "../interfaces/account";
const Query = {
    transaction: (args: Transaction) => {
        return prisma.transaction.findFirst({
            where: { id: Number(args.id) },
        });
    },

    transactions: (args: Transaction) => {
        return prisma.transaction.findMany({});
    },

    account: (args: Account) => {
        return prisma.account.findFirst({
            where: { id: Number(args.id) },
        });
    },

    accounts: (args: Account) => {
        return prisma.account.findMany({});
    },

    category: (args: Category) => {
        return prisma.category.findFirst({
            where: { id: Number(args.id) },
        });
    },
    categories: (args: Category) => {
        return prisma.category.findMany({});
    },


};

export default Query;
