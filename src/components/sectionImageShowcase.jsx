import React from 'react'
import ImageShowcase from './imageShowcase'

function sectionImageShowcase() {
    // Image show case data
    let data = [
        {
            imageUrl:"./assets/img/bg-showcase-1.jpg",
            headtext:"Fully Responsive Design",
            paraText:"When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!"
        },
        {
            imageUrl:"./assets/img/bg-showcase-2.jpg",
            headtext:"Updated For Bootstrap 5",
            paraText:"Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!"
        },
        {
            imageUrl:"./assets/img/bg-showcase-3.jpg",
            headtext:"Easy to Use & Customize",
            paraText:"Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!"
        }
    ]
  return (
    <>
    {/* image shohw case section container */}
        <section className="showcase">
            <div className="container-fluid p-0">
               {
                 data.map((item, index) => (
                    <ImageShowcase data={item} indexValue={index} key={index}/>
                 ))
               }
            </div>
        </section>
    </>
  );
}

export default sectionImageShowcase