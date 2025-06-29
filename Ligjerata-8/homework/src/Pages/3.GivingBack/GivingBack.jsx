import React from 'react'
import Card from '../../Components/Card/Card'
import WomenEmpowerment from '../../assets/WomenEmpowerment.jpg'

const GivingBack = () => {
  return (
    <>
    <section className='container mx-auto text-center w-210'>
      <div>
        <h1>Giving Back Page</h1>
        <h2>Discounts aren't a thing here at Pink Moon.</h2>
        <p>Pink Moon was founded with the intention of supporting those who need it most and creating a positive impact in everything we do. Thus, we partnered with Beam to facilitate donations to a charitable organization of your choice. Every purchase makes an impact! Scroll on below to see the progress in real-time.</p>
        <h3>The Pink Moon Community's Impact</h3>
      </div>
      <div className='flex flex-wrap gap-5'>
        <Card description="Fund 20 meals for dogs in a shelter in the New York tri-state area" image={WomenEmpowerment} />
       <Card description="Fund resources to connect 1 Black girl to the right therapist for free therapy" image={WomenEmpowerment} />
       <Card description="Fund an hour of counseling for 2 AAPI survivors of domestic violence" image={WomenEmpowerment} />
       <Card description="Fund composting supplies for 20 volunteers in New York City" image={WomenEmpowerment} />
       <Card description="Fund essential supplies for a mother in Kenya to have a safe delivery" image={WomenEmpowerment} />    
      </div>
    </section>   
   
    </>

  )
}

export default GivingBack
