import React from 'react';

const TwoColumnContent = ({ children }) => {
  return (
    <div style={{ display: 'flex'}}>
      {React.Children.map(children, (child) => (
        <div style={{ flex: 1, padding: '10px', textAlign: 'center',background: '#C1C3C4' }}>
          {child}
        </div>
      ))}
    </div>
  );
};

const Content1 = () => {
  return (
    <TwoColumnContent>

      <div>
   
        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
        <h1>LOREM IPSUM</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, cupiditate provident ipsam sint et animi temporibus earum vero assumenda molestiae.</p>
        <button>
            <h3>View More</h3>
        </button>
    </div>
      <div>
           <img 
        src="https://pngimg.com/d/laptop_PNG101837.png" 
        alt="Hedy Lamarr" 
        className="photo" 
      />
      </div>

      
    </TwoColumnContent>
  );
};

export default Content1;