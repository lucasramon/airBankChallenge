import Pagination from "./pagination"
import QueryForm from "./queryForm"
import Sorting from "./sorting"

interface RequestQuery {
    pagination: Pagination
    queryForm: QueryForm
    sort: Sorting
    query: RequestQuery

}

export default RequestQuery