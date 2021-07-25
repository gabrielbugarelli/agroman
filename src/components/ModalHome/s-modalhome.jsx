import tw from 'tailwind-styled-components'
import styled from 'styled-components';

export const Container = tw.div`
  fixed
  flex
  items-center
  justify-center

  w-screen
  h-screen
  float-right
  top-0
  left-0

  md:bg-transparent
  md:w-full
  md:h-full
  md:justify-center
  md:items-center
  md:pt-0


`;
export const ContainerModal = tw.div`
  w-4/5
  h-auto

  bg-green-50
  rounded-3xl
  shadow-2xl
  flex
  flex-col
  pt-0
  mt-0
  overflow-auto

  // md
  md:fixed
  md:w-3/5

  //xl
  xl:w-2/5

  
`;

export const ImageModal = tw.img`
  w-full
  h-72
  max-h-72
  
  mt-0

  // copiado
  // md
  md:max-h-64
`;

export const ContextModal = tw.div`
  flex-1
  pr-3
  pl-3
  pb-3
  flex
  items-center
  flex-col

  //md
  md:pl-6
  
`;

export const HeaderModal = tw.div`
  w-full
  h-auto
  mb-1
 `;
  
  export const TitleModal = tw.div`
  overflow-hidden
  whitespace-nowrap
  overflow-ellipsis
  pr-5
  text-green-500
  text-2xl
  
  // md
  md:text-3xl
  `;
  
export const CouterModal = tw.div`
  w-full
  flex
  items-center
  mt-auto
  justify-around
  text-3xl
  text-green-400

`;

export const ButtonModal = tw.button`
  mt-3
  bg-green-500
  w-1/4
  rounded-lg
  text-white
  h-2/5
  text-2xl

  // md
  md:min-h-2/6
`;

export const ContainerImageModal = tw.div`
  rounded-2xl
  p-1
  mt-1
  ml-1
  w-auto
  h-auto
  absolute
  text-3xl
  float-right
  text-green-500
  bg-green-50
  duration-1000
  
`;

export const DescriptionModal = styled.div`
  font-size: 17px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; 
  -webkit-box-orient: vertical;
  color: #4B5563 ;
  @media(min-width:768px){
    width: 85%;
    max-width: 85%;
    -webkit-line-clamp: 4; 
    font-size: 20px;
    
    
  }
`;

