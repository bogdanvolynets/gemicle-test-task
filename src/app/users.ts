// get data from random user
export const users = fetch('https://randomuser.me/api/?inc=id,picture,location,email,gender,dob,phone,name&results=20')
    .then(res => res.json())
    .then(data => data.results)
