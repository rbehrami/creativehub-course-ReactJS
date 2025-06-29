import React from 'react'
import Accordion from '../../Components/Accordion/Accordion'
import {useState} from 'react'

const Faq = () => {
   const [accordions, setAccordion] = useState([
        {
            key: 1,
            title: 'What is your process of creating and launching products?',
            data: `Pink Moon has an intensely rigorous and intentional approach when creating a product and adding it to our product mix. Our team is dedicated to thoroughly investigating and testing the ingredients, formula, and efficacy of every product we launch to ensure that they align with our ethos and meet our quality standards.

            Every product is formulated with vegan + wholesome yet results-driven ingredients*, sustainable, cruelty-free, ethically minded, inclusive of various needs, and is created to help you create impactful daily self-care rituals.

            *We don’t believe in “banned ingredients” lists, “flawless” or “perfect” skin – you’ll only find supportive and uplifting messaging and products at Pink Moon. We’re primarily focused on supporting you through your self-care/love journey, not telling you what ingredients or products to avoid (because, ultimately, the choice is yours!)`,
            isOpen: false
        },
        {
            key: 2,
            title: 'I am an Aries, so what product do I use?',
            data: `You can select products represented by your favorite star signs, by choosing the elements that target your skin's needs, or by letting our free skincare quiz decide your skincare destiny! Each astrological element – fire, earth, air and water – has its own purpose to energize, restore, brighten or hydrate skin (respectively).

            We've found that most customers love the element collection their sun sign falls under (i.e. Aries is a Fire Sign), but you can also mix and match to make it more fun!

            Fire: Aries, Leo, Sagittarius
            Earth: Taurus, Virgo, Capricorn
            Air: Gemini, Libra, Aquarius
            Water: Cancer, Scorpio, Pisces.`,
            isOpen: false
        },
        {
            key: 3,
            title: 'Are your products vegan?',
            data: `Yes, Pink Moon products are 100% vegan.`,
            isOpen: false
        },
        {
            key: 4,
            title: 'I have acne, are your products suitable for me? ',
            data: `Everyone's skin is different. However, we formulate our products with thoughtful ingredients to ensure they are suitable for anyone with acne-prone skin. Our products are formulated with non-comedogenic ingredients. You'll notice that our moisturizers don't contain shea butter, too, which is a common skincare ingredient in other natural or "clean" moisturizers that can clog pores and cause breakouts.`,
            isOpen: false
        },
           {
            key: 5,
            title: 'My skin is ultra sensitive and reactive, can I use your products? ',
            data: `We understand that everyone experiences skincare products differently, so we do recommend doing a patch test overnight to see if your skin reacts. Rest assured, we're very intentional about the products we launch. Our founder Lin conducts thorough rounds of testing on herself and with a trusted focus group to ensure that our products are sensitive-skin safe. Lin also has ultra sensitive and reactive skin! She would not launch anything that can irritate her skin.`,
            isOpen: false
        },
         {
            key: 6,
            title: 'Are your products pregnancy-safe? ',
            data: `They sure are! We carefully formulate every product to ensure they are safe to use by pregnant or breastfeeding women. However, please talk to your physician if you have any concerns.`,
            isOpen: false
        },
            {
            key: 7,
            title: 'Where are your products made? ',
            data: `We are proud to say that our products are mostly made in the USA! Our Gua Sha Tool and Bamboo Toothbrushes are ethically made in China.`,
            isOpen: false
        },
    ]);

    const toggleAccordion = (accordionkey) => {
        const updatedAccordions = accordions.map((accord) => {
            if (accord.key === accordionkey) {
                return { ...accord, isOpen: !accord.isOpen };
            } else {
                return { ...accord, isOpen: false };
            }
        });

        setAccordion(updatedAccordions);
    };
  return (
    <div>
     <div className="p-2 m-8">
                <h2 className='text-2xl mb-2 mx-auto text-green-800'>Our Products</h2>
                {accordions.map((accordion) => (
                    <Accordion
                        key={accordion.key}
                        title={accordion.title}
                        data={accordion.data}
                        isOpen={accordion.isOpen}
                        toggleAccordion={() => toggleAccordion(accordion.key)}
                    />
                ))}
            </div>
    </div>
  )
}

export default Faq
