import Link from 'next/link';
import React, { useCallback, useEffect } from 'react';
import { useAuth } from '../auth';
//import DarkNav from '../components/DarkNav';
//import HeaderNav from '../components/HeaderNav';
//import HeroSections from '../components/HeroSections';
import Nav from '../components/nav';

export const useInterval = (_callback, delay) => {
  const callback = useCallback(_callback, []);
  useEffect(() => {
      let id = setInterval(callback, delay);
      return () => clearInterval(id);
  }, [delay]);
};

export default function IndexPage() {
  const { user } = useAuth();

  return (
    <div className="bg-white dark:bg-gray-800">
      <Nav />
      <main>
      <div className="py-20 m-sm-10 text-center">
      <p className="my-5">{`User ID: ${user ? user.uid : 'no user signed in'}`}</p>

      <p className=" text-gray-600 dark:text-gray-300 m-5">
        <Link href="/authenticated">
          <a role="button" className="btn-secondary-outlined">Go to authenticated route</a>
        </Link>
      </p>
      <p className="text-gray-600 dark:text-gray-300 m-5">
        <Link href="/login">
          <a role="button" className="btn-secondary">Login</a>
        </Link>
      </p>
    </div>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/*<!-- Replace with your content -->*/}
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
              <div className="py-20 m-sm-10">
                <h1 className="text-5xl text-center text-gray-700 dark:text-gray-100">
                  Next.js + Tailwind CSS 2.0
                </h1>
              </div>
              <div className="py-10">
                <h2 className="text-center text-gray-900 dark:text-white">
                  Dark mode is here!
                </h2>
                <p className="text-center text-gray-600 dark:text-gray-300 mx-3">
                  Now that dark mode is a first-class feature of many operating
                  systems, it's becoming more and more common to design a dark
                  version of your website to go along with the default design.
                  To make this as easy as possible, Tailwind includes a dark
                  variant that lets you style your site differently when dark
                  mode is enabled:
                </p>
              </div>
              <div className="py-5">
                <p className="text-center text-gray-600 dark:text-gray-300">
                  <a role="button" className="nounderline btn-primary shadow">
                    Button
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="py-20">
            <div className="p-6 max-w-sm mx-auto bg-gray-600 dark:bg-white text-white dark:text-gray-700 rounded-xl shadow-md flex items-center space-x-4">
              <div className="flex-shrink-0">
                <img
                  className="h-12 w-12"
                  src="/img/logo.svg"
                  alt="ChitChat Logo"
                />
              </div>
              <div>
                <div className="text-xl font-medium text-black">ChitChat</div>
                <p className="text-gray-500">You have a new message!</p>
              </div>
            </div>
            <div className="py-5"></div>
          </div>

          {/*<!-- /End replace -->*/}
        </div>
      </main>
    </div>
  )
}
