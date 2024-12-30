import React, {useContext} from 'react'
import UserContext from '../Context/UserConatext'

function Profile() {
    const {user} = useContext(UserContext)

    if(!user) return <div>Please Login</div>

    return <div>Login Succesfull {user.username}!</div>
}

export default Profile