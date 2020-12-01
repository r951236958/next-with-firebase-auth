import React from 'react'
import Nav from '../components/nav'

export default function IndexPage() {
  return (
    <div className="bg-white dark:bg-gray-800">
      <Nav />
     
      <div className="py-20">
        <h1 className="text-5xl text-center text-gray-700 dark:text-gray-100">
          Next.js + Tailwind CSS 2.0
        </h1>
        <h2 className="text-center text-gray-900 dark:text-white">Dark mode is here!</h2>
        <p className="text-center text-gray-600 dark:text-gray-300">\
      Now that dark mode is a first-class feature of many operating systems, it's becoming more and more common to design a dark version of your website to go along with the default design.

To make this as easy as possible, Tailwind includes a dark variant that lets you style your site differently when dark mode is enabled:
      </p>
      
      </div>
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img className="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo" />
        </div>
        <div>
          <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-gray-500">You have a new message!</p>
        </div>
      </div>
    </div>
  )
}
