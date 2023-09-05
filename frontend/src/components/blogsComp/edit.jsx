import { Footer, Navbar } from "components";
import { Loader, MainContainer } from "components/common";
import {
  BlogWrapper,
  ImageWrapper,
  PostContainer,
  PostHeader,
  PostTextFirst,
  UploadImagedDiv,
  UploadImage,
  EditImageWrapper,
} from "./element";
import { EditBlogHook, GetBlogByIdHook } from "hooks/blogHook";
import { useEffect } from "react";

import { useState, useRef } from "react";
import { useParams } from "react-router-dom";
// import deme from "../../assets/images/deme.png";
import placeholder from "../../assets/images/placeholder.png";
// import p from "../../assets/images/p1.png";
import { storage } from "../../firebase";

function EditBlogsCom() {
  const content = useRef(null);
  const heading = useRef(null);
  const { id } = useParams();

  const [editBlogFile, setEditBlogFile] = useState(null);
  const { data: blogById, getBlogById, loading: load } = GetBlogByIdHook();
  const { data: edit, editBlog, loading, setLoading } = EditBlogHook();

  function handleBlog() {
    const obj = {
      content: content.current.innerHTML,
      heading: heading.current.innerHTML,
    };
    editBlog(id, obj);
  }

  useEffect(() => {
    if (id) {
      getBlogById(id);
    }
  }, [id, edit]);

  useEffect(() => {
    if (editBlogFile) {
      setLoading(true);
      const storageRef = storage.ref(`/tapera-jungle/${editBlogFile?.name}`);
      const uploadTask = storageRef.put(editBlogFile);

      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          console.log(error);
        },
        async () => {
          try {
            const downloadURL = await storageRef.getDownloadURL();
            editBlog(id, { image_path: downloadURL });
            // editBlog(id, formData);
          } catch (error) {
            console.error("Error getting download URL:", error);
          }
        }
      );

      const formData = new FormData();
      formData.append("section_eleven_image", editBlogFile);
      editBlog(id, formData);
    }
  }, [editBlogFile]);

  return (
    <BlogWrapper>
      {loading && <Loader />}
      {load && <Loader />}

      <Navbar />
      <MainContainer className="mainContainer">
        <EditImageWrapper>
          <label htmlFor="blog2" style={{ width: "100%" }}>
            <img
              className="img-fluid"
              src={blogById?.image ? blogById?.image : placeholder}
            />
            <UploadImagedDiv>
              <UploadImage />
              <h2>
                Update Image <small>(270px * 400px)</small>
              </h2>
            </UploadImagedDiv>
          </label>

          <input
            type="file"
            style={{ display: "none" }}
            name="blog2"
            id="blog2"
            onChange={(e) => {
              setEditBlogFile(e.target.files[0]);
            }}
          />
        </EditImageWrapper>
        <PostContainer>
          {blogById && (
            <PostHeader
              ref={heading}
              contentEditable
              onBlur={handleBlog}
              dangerouslySetInnerHTML={{ __html: blogById?.heading }}
            />
          )}
          <div className="postWrapper">
            <div>
              {blogById && (
                <PostTextFirst
                  ref={content}
                  contentEditable
                  onBlur={handleBlog}
                  dangerouslySetInnerHTML={{ __html: blogById?.content }}
                />
              )}
            </div>
          </div>
        </PostContainer>
      </MainContainer>
      <Footer />
    </BlogWrapper>
  );
}

export default EditBlogsCom;
