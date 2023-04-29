
export const columns_type_1 = [
  {  accessorKey: '_id', header: 'Request ID',type:'string'},
  {
    accessorKey: 'title',
    header: 'Title',
    type: 'string'
  },
  {
    accessorKey: 'requestType',
    header: 'Request type',
    type: 'string'

  },
  {
    accessorKey: 'created',
    header: 'Date Submitted',
    type: 'string'
  },
  {
    accessorKey: 'amount',
    header: 'Amount Requested',
    type: 'number',
    headerAlign: 'left'
  },
  {
    accessorKey: 'status',
    header: 'Approval status',
    type: 'string'
  }
]

const email_column = {
  accessorKey: 'email_address',
  header: 'Faculty ID',
  type: 'string'
}

const fac_name_column = {
    accessorKey: 'faculty_name',
    header: 'Faculty Name',
    type: 'string'
}



let columns_type_2 = [...columns_type_1]
columns_type_2.splice(1,0,email_column)
columns_type_2.splice(2,0,fac_name_column)

export const ddf_columns = [
  {
    accessorKey: '_id',
    header: 'Transaction ID',
    type: 'string'
  },{
    accessorKey: 'source',
    header: 'Source',
    type: 'string',
    default: "NA"
  },{
    accessorKey: 'request_title',
    header: 'Request Title',
    type: 'string',
    default: "NA"

  },{
    accessorKey: 'faculty_name',
    header: 'Faculty Name',
    type: 'string',
    default: "NA"
  },{
    accessorKey: 'amount',
    header: 'Amount',
    type: 'string'
  },{
    accessorKey: 'created',
    header: 'Date',
    type: 'string'
  },{
    accessorKey: 'transaction_type',
    header: 'Type of Transaction',
    type: 'string'
  },{
    accessorKey: 'balance',
    header: 'Balance',
    type: 'string'
  }
]

export default columns_type_2;
