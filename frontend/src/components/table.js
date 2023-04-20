import React ,{ Component} from 'react'
import { DataGrid} from '@mui/x-data-grid';



const table = props => {

  const {rows,coloumns} = props

  return (
      <DataGrid getRowId={(row) => row._id}
        rows={rows}
        columns={coloumns}
        initialState={{
        pagination: {
          paginationModel: {
            pageSize: 5,
          },
        },
      }}
        pageSize={[5]}
      />

  )
    
}


export default table

