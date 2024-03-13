import { v4 as uuid4 } from "uuid";
import { useCallback, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

export default function Blog() {
  const nav = useNavigate();
  const [blogs, setBlogs] = useState([
    {
      blogId: uuid4(),
      head: "Blog 1",
      desc: " i am inevitable and i really want to speed",
    },
    {
      blogId: uuid4(),
      head: "Blog 2",
      desc: " i am inevitable and i really want to speed",
    },
    {
      blogId: uuid4(),
      head: "Blog 3",
      desc: " i am inevitable and i really want to speed",
    },
    {
      blogId: uuid4(),
      head: "Blog 4",
      desc: " i am inevitable and i really want to speed",
    },
  ]);
  const memoizedBlogs = useMemo(() => blogs, [blogs]);
  const deleteThis = useCallback(
    (blogId) => {
      setBlogs(blogs.filter((elem) => elem.blogId !== blogId));
      nav("/complete");
    },
    [blogs],
  );
  return (
    <>
      {memoizedBlogs.map((elem, index) => {
        return (
          <div id={index}>
            <h1>This is {elem.head}</h1>
            <h2>This is {elem.desc}</h2>
            <button onClick={() => deleteThis(elem.blogId)}>Delete</button>
            <button>Click me</button>
          </div>
        );
      })}
    </>
  );
}
