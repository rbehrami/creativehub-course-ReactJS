import '../assets/css/topcontent.css'

export function TopContent() {
    return (
        <>
        <div className='top-content'>
            <h4 className="topcontent-title">adobe creative cloud</h4>
            <h2 className='toopcontent-subtitle'>Begin your Creative Cloud journey today.</h2>
            <p className='topcontent-paragraph'>Bring your best ideas to life with 20+ apps and generative AI tools in the All Apps plan</p>
            <div className='topcontent-footer'>
                <button>Start free trial</button>
                <a href="#">See all plans</a>
            </div>
        </div>
        </>
    );
}