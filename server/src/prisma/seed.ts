import { PrismaClient } from "@prisma/client";
import { parseCSV } from "../utils/parseCSV";
const prisma = new PrismaClient();

const transactionData = parseCSV('transactions.csv');
const accountData = parseCSV('accounts.csv');
const categoryData = parseCSV('categories.csv');


const seed = async () => {
    await prisma.transaction.deleteMany({})
    await prisma.category.deleteMany({})
    await prisma.account.deleteMany({})


    await prisma.category.createMany({
        data: categoryData

    });

    await prisma.account.createMany({
        data: accountData

    });

    await prisma.transaction.createMany({
        data: transactionData
    });

}

seed().catch(e => {
    console.log(e)
});  
