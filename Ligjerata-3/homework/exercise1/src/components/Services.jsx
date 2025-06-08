import React from 'react';

const FourColumnLayout = ({ children }) => {
  return (
    <div style={{ display: 'flex'}}>
      {React.Children.map(children, (child) => (
        <div style={{ flex: 1, padding: '10px', textAlign: 'center',background: '#ccc' }}>
          {child}
        </div>
      ))}
    </div>
  );
};

const Services = () => {
  return (
    <FourColumnLayout>

      <div>
           <img         src="https://static.vecteezy.com/system/resources/thumbnails/009/266/842/small/multiplication-sign-icon-free-png.png" 
        alt="Hedy Lamarr" 
        className="photo" 
      />
        <h5>Consulting</h5>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, placeat.</p>
    </div>
      <div>
           <img 
        src="https://static.vecteezy.com/system/resources/thumbnails/009/266/842/small/multiplication-sign-icon-free-png.png" 
        alt="Hedy Lamarr" 
        className="photo" 
      />
        <h5>Developing</h5>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, ullam!</p>
      </div>
      <div>
           <img 
        src="https://static.vecteezy.com/system/resources/thumbnails/009/266/842/small/multiplication-sign-icon-free-png.png" 
        alt="Hedy Lamarr" 
        className="photo" 
      />
        <h5>Designing</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, officiis?</p>
      </div>
      <div>
           <img 
        src="https://static.vecteezy.com/system/resources/thumbnails/009/266/842/small/multiplication-sign-icon-free-png.png" 
        className="photo" 
      />
        <h5>Analytics</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, nemo.</p>
      </div>
    </FourColumnLayout>
  );
};

export default Services;