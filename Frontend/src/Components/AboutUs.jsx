import React from 'react';
import book from '../assets/book.png'
import bookImg from '../assets/bookImg.png'
import books from '../assets/book&book.png'
import bookbook from '../assets/bookies.png'
import bgs from '../assets/undraw_Book_lover_re_rwjy.png'
import sdimg from '../assets/undraw.png'
import lib from '../assets/library.jpg'

const AboutUs = () => {
  return (
    <div className="bg-gray-100 dark:bg-slate-900 text-gray-800 dark:text-white">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-96"
        style={{ backgroundImage: `url(${lib})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Welcome to BookStore!</h1>
            <p className="text-lg font-light mb-6">
              Discover new ways to learn and grow every day with our wide range of free and premium courses.
            </p>
            <a
              href="#mission"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300"
            >
              Explore Our Courses
            </a>
          </div>
        </div>
      </div>

      {/* Our Mission Section */}
      <section id="mission" className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-4xl font-semibold mb-6">Our Mission</h2>
            <p className="text-lg leading-relaxed mb-6">
              At <strong>BookStore</strong>, our mission is to provide high-quality, accessible educational materials
              to everyone. We believe that knowledge should be free and available for everyone who seeks it.
            </p>
            <p className="text-lg leading-relaxed">
              We aim to bridge the gap in education by offering a wide variety of courses and books to learners of all
              levels.
            </p>
          </div>
          <div className="flex justify-center">
            <img
            //   src="https://www.flaticon.com/free-icon/book_8733522?term=books+collection&related_id=8733522"
                src={bgs}
              alt="Mission"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-8">Why Choose Us?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
              <img
                // src="https://source.unsplash.com/100x100/?free,education"
                src={book}
                alt="Free Courses"
                className="mx-auto mb-4 h-20 w-20"
              />
              <h3 className="text-xl font-bold mb-2">Free Courses</h3>
              <p className="text-gray-600">
                We offer a variety of free and premium educational courses to support your learning journey.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
              <img
                // src="https://source.unsplash.com/100x100/?books,reading"
                src={bookImg}
                alt="Wide Selection"
                className="mx-auto mb-4 h-20 w-20"
              />
              <h3 className="text-xl font-bold mb-2">Wide Selection</h3>
              <p className="text-gray-600">
                A huge collection of books, materials, and resources available at your fingertips.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
              <img
                // src="https://source.unsplash.com/100x100/?experts,learning"
                src={books}
                alt="Expert Content"
                className="mx-auto mb-4 h-20 w-20"
              />
              <h3 className="text-xl font-bold mb-2">Expert Content</h3>
              <p className="text-gray-600">
                High-quality courses and materials created by experienced educators and professionals.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
              <img
                // src="https://source.unsplash.com/100x100/?community,group"
                src={bookbook}
                alt="Learning Community"
                className="mx-auto mb-4 h-20 w-20"
              />
              <h3 className="text-xl font-bold mb-2">Supportive Community</h3>
              <p className="text-gray-600">
                Join a growing and supportive community of learners, educators, and experts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="bg-gray-50 py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-4xl font-semibold mb-6">Get Involved</h2>
            <p className="text-lg leading-relaxed mb-6">
              We're always looking for educators, experts, and learners who want to contribute. If you're passionate
              about sharing knowledge, join us in our mission to make learning accessible to everyone.
            </p>
            <p className="text-lg leading-relaxed">
              Whether you're looking to teach, collaborate, or just participate in the community, we'd love to hear
              from you!
            </p>
          </div>
          <div className="flex justify-center">
            <img
            //   src="https://source.unsplash.com/600x400/?teacher,students"
              src={sdimg}
              alt="Get Involved"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
