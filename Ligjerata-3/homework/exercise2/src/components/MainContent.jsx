import React from 'react';

const ThreeColumn = ({ children }) => {
  return (
    <div style={{ display: 'flex'}}>
      {React.Children.map(children, (child) => (
        <div style={{ flex: 1, padding: '10px', textAlign: 'center',background: '#CACED1' }}>
          {child}
        </div>
      ))}
    </div>
  );
};

const MainContent = () => {
  return (
    <ThreeColumn>
    <div style={{border: '2px solid black', height: "300px"}}> 
       <h3>Content left</h3> 
    </div>
    <div style={{border: '2px solid black', height: "300px"}}>
        <h3>content right</h3>
    </div>     
    </ThreeColumn>
  );
};

export default MainContent;