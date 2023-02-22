const { useState, useSyncExternalStore } = React;

const getPostsLocalStorage = () =>
{
    let posts = JSON.parse(localStorage.getItem("post"));
    if (posts == null || posts == {})
    {
        posts = [];    
    }
    return posts;
}

const addPost = (id, title, body, date) =>
{
    let posts = getPostsLocalStorage();

    posts.push({
        id: id,
        title: title,
        body: body,
        date: date
    });

    setPostsLocalStorage(posts);
}

const setPostsLocalStorage = (data) =>
{
    localStorage.setItem("post", JSON.stringify(data));
}

const Blog = ({ addBtn }) =>
{
    const renderPostChild = () => 
    {
        // load from DB
        let posts = getPostsLocalStorage();
        let blogPost = [];
        posts.forEach(d => {
            blogPost.push(<Post key={d.id} title={d.title} body={d.body} date={d.date} id={ d.id } deleteAction={()=> deletePosts(d.id)} />)
        });
        
        return blogPost;
    }

    const [ posts, setPosts ] = useState(renderPostChild());

    const deletePosts = (id) => 
    {
        let posts = getPostsLocalStorage();
        posts = posts.filter(el => {
            return el.id != id;
        });

        setPostsLocalStorage(posts);
        reloadPostView();
    }

    const reloadPostView = () =>
    {
        let blogPost = renderPostChild();
        setPosts(blogPost);
    }

    // @see https://beta.reactjs.org/reference/react/useSyncExternalStore#usesyncexternalstore
    // This is really bad I guess...
    // Functional in some way is.. sad... 
    // Hook the add button... :/
    useSyncExternalStore((callback) => {
        const subs = (...args) => {
            reloadPostView();
            callback(args);
        };

        /**
         * @type {HTMLButtonElement}
         */
        let btn = addBtn;
        btn.addEventListener('click', subs);

        // Need to remove listener after finish I guess
        return () => {
            btn.removeEventListener('click', subs);
        };
    }, function () {
        return localStorage.getItem("post")
    });

    // The HTML Return
    let html;
    
    if (posts.length <= 0)
        html = <div><h1>List of Blog Post</h1><p>Tidak ada post</p></div>;
    else 
        html = <h1>List of Blog Post</h1>;

    return (
        <div style={{height: "20px", minWidth: "50px", background:"yellow"}}>
            {html}
            {posts}
        </div>
    );
}