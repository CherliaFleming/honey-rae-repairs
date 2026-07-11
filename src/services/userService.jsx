 export const getNonStaffUser = () => {
    return fetch('http://localhost:8088/users?isStaff=false').then(res => res.json())
}

export const getStaffUser = () => {
    return fetch('http://localhost:8088/users?isStaff=true').then(res => res.json())
}

export const getUserById = (id) => {
  return fetch(`http://localhost:8088/users/${id}`).then(res => res.json())
}

export const getUserByEmail = (email) => {
  return fetch(`http://localhost:8088/users?email=${email}`).then(res => res.json())
}

export const updateUser = (user) => {
  return fetch(`http://localhost:8088/users/${user.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })
}