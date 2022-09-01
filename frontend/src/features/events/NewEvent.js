import { useSelector } from 'react-redux'
import { selectAllUsers } from '../users/usersApiSlice'
import NewEventForm from './NewEventForm'

const NewEvent = () => {
    const users = useSelector(selectAllUsers)

    if (!users?.length) return <p>Not Currently Available</p>

    const content = <NewEventForm users={users} />

    return content
}
export default NewEvent