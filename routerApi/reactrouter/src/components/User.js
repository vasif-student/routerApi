import React, { useState } from 'react'

const User = () => {
    const [data,FetchData] = useState([]);

     const GetApi = () => {
         fetch('https://randomuser.me/api/?results=200')
            .then(response => response.json())
            .then(json => {
                console.log(json)
                FetchData(json.results)
            })
            .catch(error => {
                console.log(error)
            })
    }
  return (
    <div>
        <button className='getBtn' onClick={GetApi}>Get API</button>
        <div className='main'>
        {
                data.slice(0,200).map(data => {
                   return <div className='users'>
                       <img src={data.picture.large} alt="" />
                       <p><b>Name:</b> {data.name.first}</p>
                       <p><b>Surname:</b> {data.name.last}</p>
                       <p><b>Email:</b> {data.email}</p>
                       <p><b>Phone:</b> {data.phone}</p>
                       <p><b>Gender:</b> {data.gender}</p>
                       <p><b>City:</b> {data.location.city}</p>
                   </div>
                })
            }
        </div>
    </div>
  )
}

export default User