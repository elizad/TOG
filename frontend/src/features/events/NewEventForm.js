import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAddNewEventMutation } from "./eventsApiSlice"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from "@fortawesome/free-solid-svg-icons"

const NewEventForm = ({ users }) => {

    const [addNewEvent, {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useAddNewEventMutation()

    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [userId, setUserId] = useState(users[0].id)

    useEffect(() => {
        if (isSuccess) {
            setTitle('')
            setText('')
            setUserId('')
            navigate('/dash/events')
        }
    }, [isSuccess, navigate])

    const onTitleChanged = e => setTitle(e.target.value)
    const onTextChanged = e => setText(e.target.value)
    const onUserIdChanged = e => setUserId(e.target.value)

    const canSave = [title, text, userId].every(Boolean) && !isLoading

    const onSaveEventClicked = async (e) => {
        e.preventDefault()
        if (canSave) {
            await addNewEvent({ user: userId, title, text })
        }
    }

    const options = users.map(user => {
        return (
            <option
                key={user.id}
                value={user.id}
            > {user.username}</option >
        )
    })

    const errClass = isError ? "errmsg" : "offscreen"
    const validTitleClass = !title ? "form__input--incomplete" : ''
    const validTextClass = !text ? "form__input--incomplete" : ''

    const content = (
        <>
            <p className={errClass}>{error?.data?.message}</p>

            <form className="form" onSubmit={onSaveEventClicked}>
                <div className="form__title-row">
                    <h2>New Event</h2>
                    <div className="form__action-buttons">
                        <button
                            className="icon-button"
                            title="Save"
                            disabled={!canSave}
                        >
                            <FontAwesomeIcon icon={faSave} />
                        </button>
                    </div>
                </div>
                <label className="form__label" htmlFor="title">
                    Name:</label>
                <input
                    className={`form__input ${validTitleClass}`}
                    id="title"
                    name="title"
                    type="text"
                    autoComplete="off"
                    value={title}
                    onChange={onTitleChanged}
                />

                <label className="form__label" htmlFor="text">
                    START TIME:</label>
                 {/*todo Change to allow users to pick a time */}
                <text
                    className={`form__input form__input--text ${validTextClass}`}
                    id="start_time"
                    name="start_time"
                    value={text}
                    onChange={onTextChanged}
                />

                <label className="form__label" htmlFor="text">
                    END TIME:</label>
                {/*todo Change to allow users to pick a time */}
                <text
                    className={`form__input form__input--text ${validTextClass}`}
                    id="end_time"
                    name="end_time"
                    value={text}
                    onChange={onTextChanged}
                />


                <label className="form__label" htmlFor="text">
                    DESCRIPTION:</label>
                <textarea
                    className={`form__input form__input--text ${validTextClass}`}
                    id="text"
                    name="text"
                    value={text}
                    onChange={onTextChanged}
                />

                <label className="form__label" htmlFor="text">
                    VENUE NAME :</label>
                {/*todo Change to allow users to pick a venue */}
                <text
                    className={`form__input form__input--text ${validTextClass}`}
                    id="venue_name"
                    name="venue_name"
                    value={text}
                    onChange={onTextChanged}
                />

                <label className="form__label" htmlFor="text">
                    VENUE ADDRESS:</label>
                {/*todo Change to allow users to pick it automatically */}
                <text
                    className={`form__input form__input--text ${validTextClass}`}
                    id="venue_address"
                    name="venue_address"
                    value={text}
                    onChange={onTextChanged}
                />

                <label className="form__label" htmlFor="text">
                    EVENT IMAGE URL :</label>
                {/*todo Change to allow users to pick it and change value to url */}
                <url
                    className={`form__input form__input--text ${validTextClass}`}
                    id="event_image_url"
                    name="event_image_url"
                    value={url}
                    onChange={onTextChanged}
                />

                <label className="form__label" htmlFor="text">
                    EVENT IMAGE URL :</label>
                {/*todo Change to allow users to pick it  */}
                <text
                    className={`form__input form__input--text ${validTextClass}`}
                    id="event_image_alt"
                    name="event_image_alt"
                    value={text}
                    onChange={onTextChanged}
                />


                <label className="form__label form__checkbox-container" htmlFor="username">
                    EDITED BY:</label>
                <select
                    id="username"
                    name="username"
                    className="form__select"
                    value={userId}
                    onChange={onUserIdChanged}
                >
                    {options}
                </select>

            </form>
        </>
    )

    return content
}

export default NewEventForm