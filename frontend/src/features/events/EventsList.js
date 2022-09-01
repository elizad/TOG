import { useGetEventsQuery } from "./eventsApiSlice"
import Event from "./Event"

const EventsList = () => {
    const {
        data: events,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetEventsQuery('eventsList', {
        pollingInterval: 15000,
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true
    })

    let content

    if (isLoading) content = <p>Loading...</p>

    if (isError) {
        content = <p className="errmsg">{error?.data?.message}</p>
    }

    if (isSuccess) {
        const { ids } = events

        const tableContent = ids?.length
            ? ids.map(eventId => <Event key={eventId} eventId={eventId} />)
            : null

        content = (
            <table className="table table--events">
                <thead className="table__thead">
                    <tr>
                        <th scope="col" className="table__th event__status">Username</th>
                        <th scope="col" className="table__th event__created">Created</th>
                        <th scope="col" className="table__th event__updated">Updated</th>
                        <th scope="col" className="table__th event__name">Title</th>
                        <th scope="col" className="table__th event__username">Owner</th>
                        <th scope="col" className="table__th event__edit">Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {tableContent}
                </tbody>
            </table>
        )
    }

    return content
}
export default EventsList