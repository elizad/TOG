import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { selectEventById } from './eventsApiSlice'

const Event = ({ eventId }) => {

    const event = useSelector(state => selectEventById(state, eventId))
   /// event.venue = undefined;

    const navigate = useNavigate()

    if (event) {
        const created = new Date(event.createdAt).toLocaleString('en-US', { day: 'numeric', month: 'long' })

        const updated = new Date(event.updatedAt).toLocaleString('en-US', { day: 'numeric', month: 'long' })

        const handleEdit = () => navigate(`/dash/events/${eventId}`)

        return (
            <tr className="table__row">
                <td className="table__cell event__status">
                    {event.completed
                        ? <span className="event__status--completed">Completed</span>
                        : <span className="event__status--open">Open</span>
                    }
                </td>

                <td className="table__cell event__created">{created}</td>
                <td className="table__cell event__updated">{updated}</td>
                <td className="table__cell event__username">{event.username}</td>
                
                <td className="table__cell event__name">{event.name}</td>

                <td className="table__cell event__time_start">{event.time.start}</td>
                <td className="table__cell event__time_end">{event.time.end}</td>

                <td className="table__cell event__description">{event.description}</td>

                <td className="table__cell event__venue_name">{event.venue.name}</td>
                <td className="table__cell event__venue_address">{event.venue.address}</td>

                <td className="table__cell event__image_source">{event.image.source}</td>
                <td className="table__cell event__image_alt">{event.image.alt}</td>

                <td className="table__cell">
                    <button
                        className="icon-button table__button"
                        onClick={handleEdit}
                    >
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </button>
                </td>
            </tr>
        )

    } else return null
}
export default Event