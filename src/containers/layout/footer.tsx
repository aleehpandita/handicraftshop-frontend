import {
  Facebook,
  Twitter,
  Youtube,
  Github,
  Instagram,
  Linkedin,
} from 'assets/icons/social-icons';

const social = [
  {
    id: 0,
    link: '/',
    icon: <Facebook />,
    className: 'facebook',
    title: 'facebook',
  },
  {
    id: 1,
    link: '/',
    icon: <Twitter />,
    className: 'twitter',
    title: 'twitter',
  },
  {
    id: 2,
    link: '/',
    icon: <Youtube />,
    className: 'youtube',
    title: 'youtube',
  },
  {
    id: 3,
    link: '/',
    icon: <Github />,
    className: 'github',
    title: 'github',
  },
  {
    id: 4,
    link: '/',
    icon: <Instagram />,
    className: 'instagram',
    title: 'instagram',
  },
  {
    id: 5,
    link: '/',
    icon: <Linkedin />,
    className: 'linkedin',
    title: 'linkedin',
  },
];

const Footer = () => (
  <footer className="bg-gray-600">
<div className="max-w-6xl m-auto k text-gray-800 flex flex-wrap justify-left  ">
       
       <div className="p-5 w-8/12 sm:w-4/12 md:w-3/12">
           <div className="text-xs uppercase text-gray-400 font-medium mb-6">
               Getting Started
           </div>

           <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
               Installation
           </a>
           <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
               Release Notes
           </a>
           <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
               Upgrade Guide
           </a>
           <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
               Using with Preprocessors
           </a>
           <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
               Optimizing for Production
           </a>
           <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
               Browser Support
           </a>
           <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
               IntelliSense
           </a>
       </div>
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
            <div className="text-xs uppercase text-gray-400 font-medium mb-6">
               Core Concepts
           </div>
             <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
               Utility-First
           </a>
           <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
               Responsive Design
           </a>
           <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
               Hover, Focus, & Other States
           </a>
           <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
               Dark Mode
           </a>
           <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
               Adding Base Styles
           </a>
           <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
               Extracting Components
           </a>
           <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
               Adding New Utilities
           </a>
       </div>

       <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
           <div className="text-xs uppercase text-gray-400 font-medium mb-6">
               Customization
           </div>

           <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
               Configuration
           </a>
           <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
               Theme Configuration
           </a>
           <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
               Breakpoints
           </a>
           <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
               Customizing Colors
           </a>
           <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
               Customizing Spacing
           </a>
           <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
               Configuring Variants
           </a>
           <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
               Plugins
           </a>
       </div>
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
           <div className="text-xs uppercase text-gray-400 font-medium mb-6">
               Community
           </div>

           <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
               GitHub
           </a>
           <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
               Discord
           </a>
           <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
               Twitter
           </a>
           <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
               YouTube
           </a>
       </div>
   </div>
 



<div className="w-full flex items-center justify-center bg-white shadow-footer px-2 py-15px lg:px-35px lg:justify-between">
    <p className="text-gray-900">
      Copyright &copy; 2021{' '}
      <a
        className="font-semibold transition-colors duration-200 ease-in-out hover:text-red-700"
        href="https://redq.io/"
      >
        DevPom, Inc.
      </a>{' '}
      All rights reserved
    </p>

    <div className="items-center hidden lg:flex">
      {social.map((item, index) => (
        <a
          href={item.link}
          className={`social ${item.className}`}
          key={index}
          target="_blank"
        >
          <span className="sr-only">{item.title}</span>
          {item.icon}
        </a>
      ))}
    </div>
  </div>
  </footer>
);

export default Footer;
