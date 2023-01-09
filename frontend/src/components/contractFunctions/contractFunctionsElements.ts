import styled from "styled-components";
// import img4 from '../../assets/images/bgimage.jpeg'

 
export const Wrapper = styled.div`
  background-image: url();
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-repeat: no-repeat;



  display: flex;
  flex-direction: column;
  /* margin-top: 10px; */
  overflow-x: hidden;

  .overlaybg
  {
    background-color: rgba(59, 107, 78, .8);
    
  }
`;
export const Button = styled.div`
  background-color: #295F3F;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  color: white;
  width: 200px;
  margin-top: 40px;
  margin-left: 50px;
  cursor: pointer;
  border-radius: 30px;
  border: 0.5px solid #295F3F;
box-shadow: 2px 0px 10px rgba(255, 249, 249, 0.15), 0px 2px 10px rgba(255, 255, 255, 0.15);
transition: all 0.5s;

&:hover
{
  background-color: white;
  color: #295F3F;

}
`;

 
 

 

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  p 
  {
    padding-left: 3rem;
  }

  span 
  {
    padding-left: 2rem;
  }

  
`;

 
 