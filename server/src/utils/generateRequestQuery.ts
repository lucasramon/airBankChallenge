import Pagination from '../interfaces/pagination';
import QueryForm from '../interfaces/queryForm';
import Sorting from '../interfaces/sorting';
import requestQuery from './../interfaces/requestQuery'
export const generateRequestQuery = (query: requestQuery) => {

    const { take, skip } = query.query.pagination;
    const { orderBy, sort } = query.query.sort;
    const queryParameters = Object.entries(query.query.queryForm).map(([key, value]) => ({ [key]: value }));


    const whereObject = generateWhereObject(queryParameters);

    const result = {
        take: take,
        skip: skip,
        where:
            whereObject
        ,

        orderBy: {
            [orderBy]: sort
        }
    }


    return result
}


const generateWhereObject = (queryParameters: Array<Object>) => {
    let whereAndArray: Array<Object> = [];
    for (let parameter of queryParameters) {
        if (!parameter) continue
        const parameterKey = Object.keys(parameter)[0];
        const parameterValue = Object.values(parameter)[0];
        if (parameterKey === "startMonth" || parameterKey === "endMonth") {
            handleDatesParamaters(parameterKey, parameterValue, whereAndArray);
            continue
        }

        whereAndArray.push({
            [parameterKey]: parameterValue
        })

    }
    const whereObject = {
        AND: whereAndArray
    }

    return whereObject;
}

const handleDatesParamaters = (dateParameterKey: string, dateParameterValue: string, whereAndArray: Array<Object>) => {

    if (dateParameterKey === "startMonth") {
        whereAndArray.push({
            date: {
                gte: dateParameterValue
            }
        })
    }

    if (dateParameterKey === "endMonth") {
        whereAndArray.push({
            date: {
                lte: dateParameterValue
            }
        })
    }
}