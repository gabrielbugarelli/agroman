import tw from 'tailwind-styled-components'
import styled from 'styled-components'

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
  bg-white
  rounded-3xl
  shadow-2xl
  flex
  flex-col
  overflow-auto
  mb-16

  // md
  md:fixed
  md:w-3/5
  md:max-w-lg

  //xl
  xl:w-2/5
  
  
  `;
  
  export const ImageModal = tw.img`
  w-full
  h-52
  max-h-72
  mt-0
  
  // md
  md:max-h-56

  `;
  export const ContainerImageModal = tw.div`
    rounded-2xl
    p-1
    mt-2
    ml-2
    w-auto
    h-auto
    absolute
    text-3xl
    align-end
    text-green-500
    bg-white
    duration-1000
    
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
  text-green-500
  text-3xl
  mb-2
  font-medium
  // md
  md:text-4xl
  `;
  
  
  export const TitleInstructions = tw.div`
  text-green-500
  text-xl
  mt-2
  mb-2
  flex
  font-normal
  justify-start
  
  // md
  md:text-2xl
  
  `;
  
  export const InputInstrucions = tw.input`
  border-b-2
  w-full
  border-green-300
  outline-none
  text-gray-500

  `;

  export const CouterModal = tw.div`
    w-full
    flex
    items-center
    mt-6
    justify-center
    text-3xl
    text-green-400
  `;


export const InIcon = tw.div`
  w-auto
  h-auto
  bg-gray-200
  rounded-2xl
  mr-3
  ml-3
`

export const ButtonModal = tw.button`
  mt-3
  bg-green-500
  w-1/4
  rounded-lg
  text-white
  text-2xl

  // md
  md:min-h-2/6
`;


export const DescriptionModal = styled.div`
  font-size: 17px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5; 
  -webkit-box-orient: vertical;
  color: #4B5563 ;
  background-color: #F3F4F6;
  text-align: start;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 5px;
  min-height: 150px;
  @media(min-width:768px){
    /* width: 85%;
    max-width: 85%; */
    -webkit-line-clamp: 4; 
    font-size: 20px;
  }
`;

