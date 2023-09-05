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
import { useNavigate, useParams } from "react-router-dom";
import { GetSectionNineHook } from "hooks/sectionNineHook";
import MintModal from "components/common/modal/mintModal";
function BlogsCom() {
  const { id } = useParams();
  const [selectBlog, setSelectBlog] = useState();
  const {
    data: sectionNine,
    getSectionNine,
    loading: load1,
  } = GetSectionNineHook();
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
  const navigate = useNavigate()
  const [show, setshow] = useState(false);
  return (
    <BlogWrapper>
      {loading && <Loader />}
      {load && <Loader />}
      {load1 && <Loader />}

      <Navbar />
      <MainContainer className="mainContainer">
        <ImageWrapper>
          <img className="img-fluid" src={blogById?.image} />
        </ImageWrapper>
        <PostContainer>
          <PostHeader>{blogById?.heading}</PostHeader>
          <div className="postWrapper">
            {blogById && (
              <PostTextFirst
                dangerouslySetInnerHTML={{ __html: blogById?.content }}
              />
            )}
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
            <BuyBtn onClick={() => setshow(true)}>Buy Tapera Jungle NFT</BuyBtn>
            <MintModal open={show} setShow={setshow} />
          </TextContainer>
        </ImageContainer>
      </MainContainer>
      <Footer />
    </BlogWrapper>
  );
}

export default BlogsCom;
