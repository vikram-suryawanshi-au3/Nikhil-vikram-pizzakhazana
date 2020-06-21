// import Auth from '../utils/auth'
// // const 'https://pizzakhazana.herokuapp.com/'
// // const host = 'http://localhost:5000/'

// async function register (username, email, password) {
//   const res = await window.fetch('auth/signup', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Accept': 'application/json; odata=vervose'
//     },
//     body: JSON.stringify({
//       username,
//       email,
//       password
//     })
//   })

//   return res.json()
// }

// async function login (email, password) {
//   const res = await window.fetch('auth/login', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Accept': 'application/json; odata=vervose'
//     },
//     body: JSON.stringify({
//       email,
//       password
//     })
//   })

//   return res.json()
// }

// async function fetchStats () {
//   const res = await window.fetch('stats')
//   return res.json()
// }

// async function fetchProducts () {
//   const res = await window.fetch('http://localhost:5000/pizza/all', {
//     headers : { 
//       'Content-Type': 'application/json',
//       'Accept': 'application/json'
//      }

//   })
//   return res.json()
// }

// // const axios = require('axios');

// // async function fetchProducts() {
// //   const axiosConfig = {
// //     headers: {
// //         'Content-Type': 'application/json;charset=UTF-8',
// //         "Access-Control-Allow-Origin": "*"
// //     }
// // };
// //   const response = await axios.get("/pizza/all", axiosConfig);
// //   // const data = await response.json();

// //   return response;
// // }
// console.log(fetchProducts())

// // function fetchProducts(){
// //   fetch(`pizza/all`, {
// //     headers : { 
// //       'Content-Type': 'application/json',
// //       'Accept': 'application/json'
// //      }
// //   })
// //   .then((response) => response.json())
// // }
  
// async function createProduct (data) {
//   const res = await window.fetch('pizza/create', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Accept': 'application/json; odata=vervose',
//       'Authorization': 'bearer ' + Auth.getToken()
//     },
//     body: JSON.stringify(data)
//   })

//   return res.json()
// }

// async function editProduct (id, data) {
//   const res = await window.fetch(`pizza/edit/${id}`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Accept': 'application/json; odata=vervose',
//       'Authorization': 'bearer ' + Auth.getToken()
//     },
//     body: JSON.stringify(data)
//   })

//   return res.json()
// }

// async function deleteProduct (id) {
//   const res = await window.fetch(`pizza/delete/${id}`, {
//     method: 'DELETE',
//     headers: {
//       'Authorization': 'bearer ' + Auth.getToken()
//     }
//   })

//   return res.json()
// }

// async function createReview (id, data) {
//   const res = await window.fetch(`pizza/review/${id}`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Accept': 'application/json; odata=vervose',
//       'Authorization': 'bearer ' + Auth.getToken()
//     },
//     body: JSON.stringify(data)
//   })

//   return res.json()
// }

// async function likeProduct (id) {
//   const res = await window.fetch(`pizza/like/${id}`, {
//     method: 'POST',
//     headers: {
//       'Authorization': 'bearer ' + Auth.getToken()
//     }
//   })

//   return res.json()
// }

// async function unlikeProduct (id) {
//   const res = await window.fetch(`pizza/unlike/${id}`, {
//     method: 'POST',
//     headers: {
//       'Authorization': 'bearer ' + Auth.getToken()
//     }
//   })

//   return res.json()
// }

// async function submitOrder (data) {
//   const res = await window.fetch('orders/submit', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Accept': 'application/json; odata=vervose',
//       'Authorization': 'bearer ' + Auth.getToken()
//     },
//     body: JSON.stringify(data)
//   })

//   return res.json()
// }

// async function fetchUserOrders () {
//   const res = await window.fetch('orders/user', {
//     headers: {
//       'Authorization': 'bearer ' + Auth.getToken()
//     }
//   })
//   return res.json()
// }

// async function fetchPendingOrders () {
//   const res = await window.fetch('orders/pending', {
//     headers: {
//       'Authorization': 'bearer ' + Auth.getToken()
//     }
//   })
//   return res.json()
// }

// async function approveOrder (id) {
//   const res = await window.fetch(`orders/approve/${id}`, {
//     method: 'POST',
//     headers: {
//       'Authorization': 'bearer ' + Auth.getToken()
//     }
//   })

//   return res.json()
// }


// async function fetchEmployees() {
//   const res = await window.fetch("employee/all");
//   return res.json();
// }

// async function createEmployee(data) {
//   const res = await window.fetch("employee/create", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       'Accept': 'application/json; odata=vervose',
//       Authorization: "bearer " + Auth.getToken(),
//     },
//     body: JSON.stringify(data),
//   });

//   return res.json();
// }

// async function editEmployee(id, data) {
//   const res = await window.fetch(`employee/edit/${id}`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       'Accept': 'application/json; odata=vervose',
//       Authorization: "bearer " + Auth.getToken(),
//     },
//     body: JSON.stringify(data),
//   });

//   return res.json();
// }

// async function deleteEmployee(id) {
//   const res = await window.fetch(`employee/delete/${id}`, {
//     method: "DELETE",
//     headers: {
//       Authorization: "bearer " + Auth.getToken(),
//     },
//   });

//   return res.json();
// }

// async function sendEmail (email,message) {
//   await window.fetch(`contactus?from=${email}&message=${message}`,{
//     headers : { 
//       'Content-Type': 'application/json',
//       'Accept': 'application/json; odata=vervose'
//      }
//   })
//   .catch((error) => {
//     console.error(error)
// })
// }

// async function approveEmail (to,id,price) {
//   await window.fetch(`admin/orders/pending?to=${to}&id=${id}&price=${price}`,{
//     headers : { 
//       'Content-Type': 'application/json',
//       'Accept': 'application/json; odata=vervose'
//      }
//   })
//   .catch((error) => {
//     console.error(error)
// })
// }

// export {
//   register,
//   login,
//   fetchProducts,
//   createProduct,
//   editProduct,
//   deleteProduct,
//   fetchStats,
//   createReview,
//   likeProduct,
//   unlikeProduct,
//   submitOrder,
//   fetchUserOrders,
//   fetchPendingOrders,
//   approveOrder,
//   fetchEmployees,
//   createEmployee,
//   editEmployee,
//   deleteEmployee,
//   sendEmail,
//   approveEmail
// }

import Auth from '../utils/auth'
const host = 'http://localhost:5000/'

async function register (username, email, password) {
  const res = await window.fetch('/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username,
      email,
      password
    })
  })

  return res.json()
}

async function login (email, password) {
  const res = await window.fetch('/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  })

  return res.json()
}

async function fetchStats () {
  const res = await window.fetch('stats')
  return res.json()
}

async function fetchProducts () {
  const res = await window.fetch('/pizza/all')
  return res.json()
}

console.log(fetchProducts())

console.log(fetchProducts())
  
async function createProduct (data) {
  const res = await window.fetch('/pizza/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'bearer ' + Auth.getToken()
    },
    body: JSON.stringify(data)
  })

  return res.json()
}

async function editProduct (id, data) {
  const res = await window.fetch(`/pizza/edit/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'bearer ' + Auth.getToken()
    },
    body: JSON.stringify(data)
  })

  return res.json()
}

async function deleteProduct (id) {
  const res = await window.fetch(`/pizza/delete/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': 'bearer ' + Auth.getToken()
    }
  })

  return res.json()
}

async function createReview (id, data) {
  const res = await window.fetch(`/pizza/review/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'bearer ' + Auth.getToken()
    },
    body: JSON.stringify(data)
  })

  return res.json()
}

async function likeProduct (id) {
  const res = await window.fetch(`/pizza/like/${id}`, {
    method: 'POST',
    headers: {
      'Authorization': 'bearer ' + Auth.getToken()
    }
  })

  return res.json()
}

async function unlikeProduct (id) {
  const res = await window.fetch(`/pizza/unlike/${id}`, {
    method: 'POST',
    headers: {
      'Authorization': 'bearer ' + Auth.getToken()
    }
  })

  return res.json()
}

async function submitOrder (data) {
  const res = await fetch('/orders/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'authorization': 'bearer ' + Auth.getToken()
    },
    body: JSON.stringify(data)
  })

  return res.json()
}

async function fetchUserOrders () {
  const res = await fetch('/orders/user', {
    headers: {
      'Content-Type': 'application/json',
      authorization: 'bearer ' + Auth.getToken()
    }
  })
  return res.json()
}


const axios = require('axios');

// async function fetchPendingOrders() {
//   const axiosConfig = {
//     headers: {
//         'Content-Type': 'application/json;charset=UTF-8',
//         "Access-Control-Allow-Origin": "*"
//     }
// };
//   const response = await axios.get("/orders/pending", axiosConfig);
//   // const data = await response.json();

//   return response;
// }

async function fetchPendingOrders () {
  const res = await fetch('/orders/pending',
  {
    headers: {
      'Content-Type': 'application/json',
      authorization: 'bearer ' + Auth.getToken()
    }
  }
  )
  return res.json() 
}

async function approveOrder (id) {
  const res = await fetch(`/orders/approve/${id}`, {
    method: 'POST',
    headers: {
      authorization: 'bearer ' + Auth.getToken()
    }
  })

  return res.json()
}


async function fetchEmployees() {
  const res = await window.fetch("/employee/all");
  return res.json();
}

async function createEmployee(data) {
  const res = await window.fetch("/employee/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "bearer " + Auth.getToken(),
    },
    body: JSON.stringify(data),
  });

  return res.json();
}

async function editEmployee(id, data) {
  const res = await window.fetch(`/employee/edit/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "bearer " + Auth.getToken(),
    },
    body: JSON.stringify(data),
  });

  return res.json();
}

async function deleteEmployee(id) {
  const res = await window.fetch(`/employee/delete/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: "bearer " + Auth.getToken(),
    },
  });

  return res.json();
}

async function sendEmail (email,message) {
  // await fetch(`/contactus?from=${email}&message=${message}`,{
    let res =  await fetch(`/contactus`,{
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }
  }).then(console.log(res))
  .catch((error) => {
    console.error(error)
})
}

// async function sendEmail() {
//   const axiosConfig = {
//     headers: {
//         'Content-Type': 'application/json;charset=UTF-8',
//         "Access-Control-Allow-Origin": "*"
//     }
// };
//   await axios.get(`/contactus?from=${email}&message=${message}`, axiosConfig);
//   // const data = await response.json();

// }

async function approveEmail (to,id,price) {
  await window.fetch(`/admin/orders/pending?to=${to}&id=${id}&price=${price}`,{
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }
  })
  .catch((error) => {
    console.error(error)
})
}

export {
  register,
  login,
  fetchProducts,
  createProduct,
  editProduct,
  deleteProduct,
  fetchStats,
  createReview,
  likeProduct,
  unlikeProduct,
  submitOrder,
  fetchUserOrders,
  fetchPendingOrders,
  approveOrder,
  fetchEmployees,
  createEmployee,
  editEmployee,
  deleteEmployee,
  sendEmail,
  approveEmail
}

