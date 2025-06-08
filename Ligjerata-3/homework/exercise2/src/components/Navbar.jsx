function NavBar(){
    return (
        <>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between', // h2 on left, nav on right
              alignItems: 'center',            // vertical centering
              height: '50px',
              padding: '0 11rem', 
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' // X: 0, Y: 4px, blur: 6px, color              // optional: add horizontal padding
            }}>
            <h2>STEEL DOORS</h2>
            <nav>
              <ul style={{display: 'flex',gap: '1rem',listStyle: 'none',margin: 0,padding: 0}}>
                <li>PRODUCTS</li>
                <li>SERVICES</li>
                <li>ABOUT</li>
                <li>ABOUT</li>
                <li>JOBS</li>
                <li>CONTACT</li>
                <li>+81-00-0000-0000</li>
              </ul>
            </nav>
          </div>
        </> 
    )
}

export default NavBar;