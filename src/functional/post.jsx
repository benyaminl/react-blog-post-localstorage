const Post = ({ id, title, date, body, deleteAction }) =>
{
    date = new Date(date);
    date = date.toDateString() + " " + date.toTimeString();

    return (
        <div>
            <button onClick={deleteAction}>Delete</button>
            <input type="hidden" name={"id" + id} />
            <h3>{title}</h3>
            <h6>{date}</h6>
            <p>{body}</p>
        </div>
    );
}