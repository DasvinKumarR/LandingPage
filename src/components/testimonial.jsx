import React from 'react'
import TestimonialCard from './testimonialCard'

function testimonial() {

    let data = [
        {
            imageSrc:'src/assets/img/testimonials-1.jpg',
            name:'Margaret E.',
            comments:'"This is fantastic! Thanks so much guys!"'
        },
        {
            imageSrc:'src/assets/img/testimonials-2.jpg',
            name:'Fred S.',
            comments:'"Bootstrap is amazing. I have been using it to create lots of super nice landing pages."'
        },
        {
            imageSrc:'src/assets/img/testimonials-3.jpg',
            name:'Sarah W.',
            comments:'"Thanks so much for making these free resources available to us!"'
        }
    ];

  return (
    <>
         {/* <!-- Testimonials--> */}
        <section className="testimonials text-center bg-light">
            <div className="container">
                <h2 className="mb-5">What people are saying...</h2>
                <div className="row">
                    {
                        data.map((item, index) => (
                            // Calling testimonial card
                            <TestimonialCard data={item} key={index} />
                        ))
                    }
                </div>
            </div>
        </section>
    </>
  )
}

export default testimonial