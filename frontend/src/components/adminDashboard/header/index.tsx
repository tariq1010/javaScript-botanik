import { MainCol, MainContainer, MainRow } from "components/common";
import {
  BottomWrapper,
  HeaderWrapper,
  ImageContainer,
  ImageWrapper,
  SecondImageContainer,
  TextContainer,
  WrapperContainer,
  WrapperHeader,
  WrapperText,
  SecondWrapperText,
  NumbersDiv,
  NumbersWrapper,
  Numbers,
  NumbersText,
} from "./element";
import { EditSectionOneHook, GetSectionOneHook } from "hooks/sectionOneHook";
import { useEffect, useState } from "react";
import { EditSectionTwoHook, GetSectionTwoHook } from "hooks/sectionTwoHook";
import { EditSectionThreeHook, GetSectionThreeHook } from "hooks/sectionThreeHook";
import { GetSectionFourHook } from "hooks/sectionFourHook";
import  { useRef } from 'react';
function Header() {
  const [sectionOneFile,setSectionOneFile]=useState(null)
  const [sectiontwoFile,setSectiontwoFile]=useState(null)
  const [sectionThreeFile,setSectionThreeFile]=useState(null)

  const sectionOneText = useRef(null);
  const sectiontwoText = useRef(null);
  const sectionthreeText = useRef(null);
  const sectiontwoParagraph_one = useRef(null);
  const sectionThreeParagraph= useRef(null);

  const { data, getSectionOne, loading } = GetSectionOneHook();
  const {data:edited, editSectionOne} = EditSectionOneHook();
  const {data:editedSectionTwo, editSectionTwo} = EditSectionTwoHook();
  const {data:editedSectionThree, editSectionThree} = EditSectionThreeHook();

  const { data: sectionTwo, getSectionTwo } = GetSectionTwoHook();
  const { data: sectionThree, getSectionThree } = GetSectionThreeHook();
  const { data: sectionFour, getSectionFour } = GetSectionFourHook();



  function stripTags(html: any) {
    if( html) {
      // return html.replace(/<br[^>]*>|<div[^>]*>/g, '</br>')
      return html.replace(/<br[^>]*>/g, '</br>')
    }
  }

  function handleSectionOne() {
    editSectionOne(data[0]._id,sectionOneText.current.innerHTML); 
  }


  function handleSectionTwo() {
  const   data={
    heading:  sectiontwoText.current.innerHTML,
    paragraph_one:sectiontwoParagraph_one.current.innerHTML,
    }
    editSectionTwo(sectionTwo[0]._id,data);
  }

  function handleSectionThree() {
    const   data={
      paragraph_one:sectionThreeParagraph.current.innerHTML,
      }
      editSectionThree(sectionThree[0]._id,data);
    }



    useEffect(() => {
      getSectionFour();
    }, []);
  
    useEffect(() => {
      getSectionOne();
      setSectionOneFile(null);
     
    }, [edited]);
  
    useEffect(() => {
      getSectionTwo();
      setSectiontwoFile(null);
    }, [editedSectionTwo]);
  
    useEffect(() => {
      getSectionThree();
      setSectionThreeFile(null);
    }, [editedSectionThree]);






  useEffect(() => {
   if(sectionOneFile){
    editSectionOne(data[0]._id,sectionOneFile)
   }
  }, [sectionOneFile]);

  useEffect(() => {
    if(sectiontwoFile){
     editSectionTwo(sectionTwo[0]._id,sectiontwoFile)
    }
   }, [sectiontwoFile]);

   useEffect(() => {
    if(sectionThreeFile){
     editSectionThree(sectionThree[0]._id,sectionThreeFile)
    }
   }, [sectionThreeFile]);

  return (
    <HeaderWrapper >
      <MainContainer>
       
        <ImageWrapper>
        <label htmlFor="sectionOneFile" style={{width:"100%"}}>
          <img
          className="img-fluid" src={data && data[0]?.image} />
           </label>
           <input type="file" style={{display:"none"}} name="sectionOneFile" id="sectionOneFile"
            onChange={(e)=>setSectionOneFile(e.target.files[0]) }
           />
        </ImageWrapper>
       
        <TextContainer>
        {  data &&<p
           dangerouslySetInnerHTML={{ __html: stripTags(data[0]?.text)}}
           ref={sectionOneText} contentEditable onBlur={handleSectionOne} 
          ></p>}
        </TextContainer>
        <BottomWrapper>
          <MainRow>
            <MainCol lg={6} className="d-flex justify-content-center">
              <WrapperContainer>
                <WrapperHeader
                 ref={sectiontwoText} contentEditable onBlur={handleSectionTwo}
                >
                  {sectionTwo && sectionTwo[0]?.heading}
                </WrapperHeader>
                  {sectionTwo &&<WrapperText
                ref={sectiontwoParagraph_one} contentEditable onBlur={handleSectionTwo} 
                dangerouslySetInnerHTML={{ __html: stripTags( sectionTwo[0]?.paragraph_one)}}
                >
                </WrapperText>}
              </WrapperContainer>
            </MainCol>
            <MainCol lg={6}>
              <ImageContainer>
                <label
                // htmlFor="two"
                htmlFor="two"
                style={{width:"100%"}}
                >
               
                <img
                  src={sectionTwo && sectionTwo[0]?.image}
                  alt=""
                  className="img-fluid sectionImg"
                  
                />
                </label>
                <input type="file" style={{display:"none"}} name="two" id="two" 
                onChange={(e)=>setSectiontwoFile(e.target.files[0])}
                />
                


              </ImageContainer>
            </MainCol>
          </MainRow>
          <MainRow>
            <MainCol lg={6}>
              <SecondImageContainer>
                <label htmlFor="three" style={{width:"100%"}}>
                <img
                  src={sectionThree && sectionThree[0]?.image}
                  alt=""
                  className="img-fluid sectionImg"
                />
                 </label>
                 <input type="file" style={{display:"none"}} name="three" id="three" 
                onChange={(e)=>setSectionThreeFile(e.target.files[0])}
                />

              </SecondImageContainer>
            </MainCol>
            <MainCol lg={6} className="d-flex justify-content-center">
             {sectionThree &&<SecondWrapperText 
              ref={sectionThreeParagraph} contentEditable onBlur={handleSectionThree}
             dangerouslySetInnerHTML={{ __html: stripTags(sectionThree[0]?.paragraph_one)}}
             />
            }
            </MainCol>
          </MainRow>
        </BottomWrapper>

        <NumbersDiv>
          <MainRow>
            <MainCol lg={4}>
              <NumbersWrapper>
                <Numbers>{sectionFour && sectionFour[0]?.heading1}</Numbers>
                <NumbersText>
                  {sectionFour && sectionFour[0]?.text1}
                </NumbersText>
              </NumbersWrapper>
            </MainCol>
            <MainCol lg={4}>
              <NumbersWrapper>
                <Numbers>{sectionFour && sectionFour[0]?.heading2}</Numbers>
                <NumbersText>
                  {sectionFour && sectionFour[0]?.text1}
                </NumbersText>
              </NumbersWrapper>
            </MainCol>
            <MainCol lg={4}>
              <NumbersWrapper>
                <Numbers>{sectionFour && sectionFour[0]?.heading3}</Numbers>
                <NumbersText>
                  {sectionFour && sectionFour[0]?.text1}
                </NumbersText>
              </NumbersWrapper>
            </MainCol>
          </MainRow>
        </NumbersDiv>
      </MainContainer>
    </HeaderWrapper>
  );
}

export default Header;
