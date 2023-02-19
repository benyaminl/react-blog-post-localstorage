class Blog extends React.Component
{
    constructor(p)
    {
        super(p);
        this.state = { posts: [] };
    }

    componentDidMount()
    {
        this.reloadPostView();
    }

    getPosts = () =>
    {
        let posts = JSON.parse(localStorage.getItem("post"));
        if (posts == null || posts == {})
        {
            posts = [];    
        }
        return posts;
    }

    setPosts = (data) =>
    {
        localStorage.setItem("post", JSON.stringify(data));
    }

    deletePosts = (id) => 
    {
        let posts = this.getPosts();
        posts = posts.filter(el => {
            return el.id != id;
        });

        this.setPosts(posts);
        this.reloadPostView();
    }

    reloadPostView = () => 
    {
        // load from DB
        let posts = this.getPosts();
        let blogPost = [];
        posts.forEach(d => {
            blogPost.push(<Post key={d.id} title={d.title} body={d.body} date={d.date} id={ d.id } delete={()=> this.deletePosts(d.id)} />)
        });

        this.setState({ posts: blogPost });
    }

    addPost = (id, title, body, date) =>
    {
        let posts = this.getPosts();

        posts.push({
            id: id,
            title: title,
            body: body,
            date: date
        });

        this.setPosts(posts);
        this.reloadPostView();
    }

    render()
    {
        let html;
        
        if (this.state.posts.length <= 0)
            html = <div><h1>List of Blog Post</h1><p>Tidak ada post</p></div>;
        else 
            html = <h1>List of Blog Post</h1>;
        
        return (
            <div>
                {html}
                {this.state.posts}
            </div>
        );
    }
}