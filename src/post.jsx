class Post extends React.Component
{
    constructor(p)
    {
        super(p);
    }

    render()
    {
        let date = new Date(this.props.date);
        date = date.toDateString() + " " + date.toTimeString();

        return (
            <div>
                <button onClick={this.props.delete}>Delete</button>
                <input type="hidden" name={ "id" + this.props.id } />
                <h3>{this.props.title}</h3>
                <h6>{date}</h6>
                <p>{this.props.body}</p>
            </div>
        )
    }
}