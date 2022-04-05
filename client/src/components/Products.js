

import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { LoadDepartmentProducts } from '../store/actions/DepartmentActions'

const mapStateToProps = ({ productState }) => {
  return { productState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: (id) => dispatch(LoadDepartmentProducts(id))
  }
}

const Products = (props) => {
  let { id } = useParams()

  useEffect(() => {
    props.fetchProducts(id)
  },[id])

  return (
    <ul>
      {props.productState.products.length ? (
        props.productState.products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))
      ) : (
        <h3>No Products</h3>
      )}
    </ul>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)



// import React, { useEffect } from 'react';


// import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
// import { LoadDepartmentsProducts } from '../store/actions/DepartmentActions'

// const mapStateToProps = ({ departmentState }) => {
//   return { departmentState }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchDepartments: () => dispatch(LoadDepartmentsProducts())
//   }
// }



// const Departments = (props) => {
//   useEffect(() => {
//     props.fetchDepartments()
//   }, [])
  
//   return (
//     <div>
//       {props.departmentState.departments.map((department) => (
//         <ul key={department.id}>
//           <Link to={`/departments/${department.id}`}>{department.name}</Link>
//         </ul>
//       ))}
//     </div>
//   )
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Departments)




// import React, { useEffect } from 'react';
// import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
// import { LoadDepartments, LoadDepartmentsProducts } from '../store/actions/DepartmentActions'

// const mapStateToProps = ({ productsState }) => {
//   return { productsState }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchProducts: () => dispatch(LoadDepartmentsProducts())
//   }
// }



// const Products = (props) => {
//   useEffect(() => {
//     props.fetchProducts()
//   }, [])
  
//   return (
//     <div>
//       {props.productState.products.map((product) => (
//         <ul key={product.id}>
//           <Link to={`/products/${product.id}`}>{product.name}</Link>
//         </ul>
//       ))}
//     </div>
//   )
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Products)