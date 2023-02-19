import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js'

/**
 * @type {Blog}
 */
let blogRef = React.createRef();
ReactDOM.createRoot(document.querySelector("#blog")).render(<Blog ref={blogRef}/>);

window.blog = () => blogRef.current;

// Module tambah Post
document.querySelector("#btnTambah").onclick = function() {
    let judul = document.querySelector("#judul").value;
    let tanggal = document.querySelector("#tanggal").value;
    let body = document.querySelector("#post-createInput").value;

    window.blog().addPost(nanoid(), judul, body, tanggal);
};

