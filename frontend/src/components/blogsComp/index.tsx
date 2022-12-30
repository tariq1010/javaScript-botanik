import { Footer, Navbar } from "components";
import { Loader, MainContainer } from "components/common";
import {
  BlogWrapper,
  ImageWrapper,
  PostContainer,
  PostHeader,
  ImageContainer,
  TextContainer,
  TextNote,
  HeaderText,
  BuyBtn,
  PostTextFirst,
} from "./element";

import { GetBlogByIdHook, GetBlogHook } from "hooks/blogHook";
import { useEffect } from "react";

import { useState } from "react";
import { useParams } from "react-router-dom";
import { GetSectionNineHook } from "hooks/sectionNineHook";
function BlogsCom() {
  const { id } = useParams();
  const [selectBlog, setSelectBlog] = useState();
  const { data: sectionNine, getSectionNine,loading:load1 } = GetSectionNineHook();
  const {
    data: blogById,
    getBlogById,
    loading: load,
    setData,
  } = GetBlogByIdHook();
  const { data, getBlog, loading } = GetBlogHook();

  useEffect(() => {
    getBlog();
    getSectionNine();
    window.scroll(0, 0);
  }, []);

  useEffect(() => {
    if (id) {
      getBlogById(id);
    }
  }, [id]);

  useEffect(() => {
    if (selectBlog) {
      const selected = data.find((x) => x._id == selectBlog);
      setData(selected);
      window.scroll(0, 0);
    }
  }, [selectBlog]);

  return (
    <BlogWrapper>
      {loading && <Loader/>}
      {load && <Loader/>}
      {load1 && <Loader/>}
     
      <Navbar />
      <MainContainer className="mainContainer">
        <ImageWrapper>
          <img className="img-fluid" src={blogById?.image} />
        </ImageWrapper>
        <PostContainer>
          <PostHeader>{blogById?.heading}</PostHeader>
          <div className="postWrapper">
            <div>
              {blogById && (
                <PostTextFirst
                  dangerouslySetInnerHTML={{ __html: blogById?.content }}
                />
              )}
            </div>
            <div></div>
          </div>
        </PostContainer>

        <ImageContainer>
          <img
            src={sectionNine && sectionNine[0]?.image}
            alt=""
            className="img-fluid"
          />
          <TextContainer>
            {sectionNine && (
              <HeaderText
                dangerouslySetInnerHTML={{ __html: sectionNine[0]?.heading }}
              />
            )}

            {sectionNine && (
              <TextNote
                dangerouslySetInnerHTML={{ __html: sectionNine[0]?.paragraph }}
              />
            )}
            <BuyBtn>Buy Tapera Jungle NFT</BuyBtn>
          </TextContainer>
        </ImageContainer>
      </MainContainer>
      <Footer />
    </BlogWrapper>
  );
}

export default BlogsCom;
