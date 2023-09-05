import { createGlobalStyle } from "styled-components";
// import mainBg from "./assets/images/mintingBg.png";

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
  
 } 

  

 body
{
  /* background: url($) no-repeat ;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-position: center center;
  background-attachment: fixed; */
  background: #2b2b2b
;
  
} 
 
 
iframe
{
  position: absolute !important;
  width: none !important;
  top: none !important;
  left: none !important;
  right: none !important;
  z-index: -5 !important;
}
//  loader
.cover-spin {
  position: fixed;
  width: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background:rgba(0,0,0,0.8);
 
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}

 
 
 
/* model */
.ant-modal-footer
{
    display: none;
}
 .ant-modal-close
  {
    display: none;
  }
  .ant-modal-content
  {
   background: none;
  }
  .ant-modal-body
  {
    padding: 0px;
  }
 
 
 .mintedBtn
 {
   /* cursor: not-allowed !important;  */
    
 }

 .ant-form-item-explain-error {
    color: #fff;
    margin-top: 0.7rem;
}

.btnAddAddress
  {
    background: gray !important;
    cursor: not-allowed !important;
  }
  .ant-table-pagination.ant-pagination
  {
    justify-content: center !important;
  }

  .container-fluid {
    padding-left: 7rem;
    padding-right: 7rem;
  }
`;

export default GlobalStyle;
