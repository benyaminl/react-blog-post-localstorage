import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js'

// /**
//  * @type {Blog}
//  */
// let blogRef = React.createRef();
let btnTambah = document.querySelector("#btnTambah");
let blog = ReactDOM.createRoot(document.querySelector("#blog"));
    blog.render(<Blog addBtn={btnTambah}  />);
// ReactDOM.createRoot(document.querySelector("#single")).render(<Post title="aaaa" body="vvvv" deleteAction={() => alert("asd")} />);
console.log(blog);
// window.blog = () => blogRef.current;
// console.log(blogRef);

// Module tambah Post
btnTambah.onclick = function() {
    let judul = document.querySelector("#judul").value;
    let tanggal = document.querySelector("#tanggal").value;
    let body = document.querySelector("#post-createInput").value;

    addPost(nanoid(), judul, body, tanggal);
};

