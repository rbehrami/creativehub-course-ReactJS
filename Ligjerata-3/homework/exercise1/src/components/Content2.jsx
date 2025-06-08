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

const Content2 = () => {
  return (
    <ThreeColumn>
    <div> 
        <h3>LATEST NEWS</h3>
        <img src="https://craftmypdf.com/wp-content/uploads/2023/01/medium_rectangle.png" alt="Hedy Lamarr" className="photo"/>
        <p>Lorem ipsum dolor sit amet..</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ex debitis excepturi eveniet saepe non dolorum quam commodi minus consequuntur. Ipsam at quia ex ratione!</p>
    </div>
    <div>
        <h3>RELEASE</h3>
        <img src="https://craftmypdf.com/wp-content/uploads/2023/01/medium_rectangle.png" alt="Hedy Lamarr"     className="photo"/>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione laudantium beatae aperiam cumque dicta inventore, veritatis vero eum magni, atque, placeat veniam velit tenetur incidunt?</p>
    </div>
    <div>
        <h3>JOBS</h3>
        <img src="https://craftmypdf.com/wp-content/uploads/2023/01/medium_rectangle.png" alt="Hedy Lamarr"        className="photo"/>
        <p>Lorem ipsum dolor sit amet..</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam perspiciatis dolor temporibus placeat ex ipsum, illum aliquid nulla quod, quae omnis, eveniet enim aperiam similique.</p>
    </div>      
    </ThreeColumn>
  );
};

export default Content2;