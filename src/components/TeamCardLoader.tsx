import React from 'react';
import ContentLoader from 'react-content-loader';

function TeamCardLoader(props: any) {
  // let numberLines;

  // switch (props.screen) {
  //   case "mobile": {
  //     numberLines = 2;
  //     break;
  //   }
  //   case "desktop": {
  //     numberLines = 3;
  //     break;
  //   }
  //   case "large-screen": {
  //     numberLines = 4;
  //     break;
  //   }
  //   default: {
  //     numberLines = 5;
  //     break;
  //   }
  // }
  return (
    <ContentLoader 
    speed={2}
    width={'100%'}
    height={'100%'}
    viewBox="0 0 1200 384"
    backgroundColor="#ffffff"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="10" y="6" rx="3" ry="3" width="266" height="266" /> 
    <rect x="10" y="291" rx="3" ry="3" width="1200" height="75" /> 
    <rect x="290" y="10" rx="3" ry="3" width="278" height="30" /> 
    <rect x="290" y="60" rx="3" ry="3" width="228" height="20" /> 
    <rect x="290" y="105" rx="3" ry="3" width="278" height="20" /> 
    <rect x="290" y="150" rx="3" ry="3" width="178" height="20" /> 
    <rect x="290" y="195" rx="3" ry="3" width="278" height="20" /> 
    <rect x="290" y="240" rx="3" ry="3" width="378" height="20" /> 
  </ContentLoader>
  );
}

export default TeamCardLoader