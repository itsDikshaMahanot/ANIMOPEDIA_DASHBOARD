import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { MenuIcon, SearchIcon, XIcon } from '@heroicons/react/outline'

// const navigation = {
//   categories: [
//     {
//       id: 'dog',
//       name: 'Dog',
//       featured: [
//         {
//           name: 'Best Breeds',
//           href: '#',
//           imageSrc: 'https://smnewsnet.com/wp-content/uploads/2020/05/German-Shepherd.jpg',
//           imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
//         },
//       ],
//       sections: [
//         {
//           id: 'dog',
//           name: 'Dog',
//           items: [
//             { name: 'Breeds', href: '#' },
//             { name: 'Skin Care', href: '#' },
//             { name: 'Vaccinations', href: '#' },
//             { name: 'Moderators', href: '#' },
//             { name: 'Activities', href: '#' },
//           ],
//         },
//       ],
//     },
//     {
//       id: 'fish',
//       name: 'Fish',
//       featured: [
//         {
//           name: 'Best Breeds',
//           href: '#',
//           imageSrc: 'https://www.peta.org/wp-content/uploads/2019/08/iStock-1160758684_NONTANUN-CHAIPRAKON-1-602x301.jpg',
//           imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
//         },
//       ],
//       sections: [
//         {
//           id: 'fish',
//           name: 'Fish',
//           items: [
//             { name: 'Breeds', href: '#' },
//             { name: 'Skin Care', href: '#' },
//             { name: 'Schooling', href: '#' },
//             { name: 'Moderators', href: '#' },
//             { name: 'Activities', href: '#' },
//           ],
//         },
//       ],
//     },
//     {
//       id: 'food',
//       name: 'Food',
//       featured: [
//         // {
//         //   name: 'Best Breeds',
//         //   href: '#',
//         //   imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
//         //   imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
//         // },
//       ],
//       sections: [
//         {
//           id: 'food',
//           name: 'Food',
//           items: [
//             { name: 'Fish Food', href: '#' },
//             { name: 'Dog Food', href: '#' },
//           ],
//         },
//       ],
//     },
//   ],
//   pages: [
//     { name: 'Insert', href: '#' },
//     { name: 'Update', href: '#' },
//   ],
// }

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

// export default function App() {
//   const [open, setOpen] = useState(false)

//   return (
//     <div className="bg-white">
//       {/* Mobile menu */}
//       <Transition.Root show={open} as={Fragment}>
//         <Dialog as="div" className="fixed inset-0 flex z-40 lg:hidden" onClose={setOpen}>
//           <Transition.Child
//             as={Fragment}
//             enter="transition-opacity ease-linear duration-300"
//             enterFrom="opacity-0"
//             enterTo="opacity-100"
//             leave="transition-opacity ease-linear duration-300"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//           >
//             <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
//           </Transition.Child>

//           <Transition.Child
//             as={Fragment}
//             enter="transition ease-in-out duration-300 transform"
//             enterFrom="-translate-x-full"
//             enterTo="translate-x-0"
//             leave="transition ease-in-out duration-300 transform"
//             leaveFrom="translate-x-0"
//             leaveTo="-translate-x-full"
//           >
//             <div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
//               <div className="px-4 pt-5 pb-2 flex">
//                 <button
//                   type="button"
//                   className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
//                   onClick={() => setOpen(false)}
//                 >
//                   <span className="sr-only">Close menu</span>
//                   <XIcon className="h-6 w-6" aria-hidden="true" />
//                 </button>
//               </div>

//               {/* Links */}
//               <Tab.Group as="div" className="mt-2">
//                 <div className="border-b border-gray-200">
//                   <Tab.List className="-mb-px flex px-4 space-x-8">
//                     {navigation.categories.map((category) => (
//                       <Tab
//                         key={category.name}
//                         className={({ selected }) =>
//                           classNames(
//                             selected ? 'text-indigo-600' : 'text-gray-900 border-transparent',
//                             'flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium'
//                           )
//                         }
//                       >
//                         {category.name}
//                       </Tab>
//                     ))}
//                   </Tab.List>
//                 </div>
//                 <Tab.Panels as={Fragment}>
//                   {navigation.categories.map((category) => (
//                     <Tab.Panel key={category.name} className="pt-10 pb-8 px-4 space-y-10">
//                       <div className="grid grid-cols-2 gap-x-4">
//                         {category.featured.map((item) => (
//                           <div key={item.name} className="group relative text-sm">
//                             <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
//                               <img src={item.imageSrc} alt={item.imageAlt} className="object-center object-cover" />
//                             </div>
//                             <a href={item.href} className="mt-6 block font-medium text-gray-900">
//                               <span className="absolute z-10 inset-0" aria-hidden="true" />
//                               {item.name}
//                             </a>
//                             <p aria-hidden="true" className="mt-1">
//                               Know more
//                             </p>
//                           </div>
//                         ))}
//                       </div>
//                       {category.sections.map((section) => (
//                         <div key={section.name}>
//                           <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-gray-900">
//                             {section.name}
//                           </p>
//                           <ul
//                             role="list"
//                             aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
//                             className="mt-6 flex flex-col space-y-6"
//                           >
//                             {section.items.map((item) => (
//                               <li key={item.name} className="flow-root">
//                                 <a href={item.href} className="-m-2 p-2 block text-gray-500">
//                                   {item.name}
//                                 </a>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                       ))}
//                     </Tab.Panel>
//                   ))}
//                 </Tab.Panels>
//               </Tab.Group>

//               <div className="border-t border-gray-200 py-6 px-4 space-y-6">
//                 {navigation.pages.map((page) => (
//                   <div key={page.name} className="flow-root">
//                     <a href={page.href} className="-m-2 p-2 block font-medium text-gray-900">
//                       {page.name}
//                     </a>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </Transition.Child>
//         </Dialog>
//       </Transition.Root>

//       <header className="relative bg-teal-300">
//         <nav aria-label="Top" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="border-b border-gray-200">
//             <div className="h-16 flex items-center">
//               <button
//                 type="button"
//                 className="bg-white p-2 rounded-md text-gray-400 lg:hidden"
//                 onClick={() => setOpen(true)}
//               >
//                 <span className="sr-only">Open menu</span>
//                 <MenuIcon className="h-6 w-6" aria-hidden="true" />
//               </button>

//               {/* Logo */}
//               <div className="ml-4 flex lg:ml-0">
//                 <a href="#">
//                   <span className="sr-only">Workflow</span>
//                   <img
//                     className="h-8 w-auto"
//                     src="https://st2.depositphotos.com/1799371/7138/v/600/depositphotos_71389329-stock-illustration-vector-image-of-an-dog.jpg"
//                     alt=""
//                   />
//                 </a>
//               </div>

//               {/* Flyout menus */}
//               <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
//                 <div className="h-full flex space-x-8">
//                   {navigation.categories.map((category) => (
//                     <Popover key={category.name} className="flex">
//                       {({ open }) => (
//                         <>
//                           <div className="relative flex">
//                             <Popover.Button
//                               className={classNames(
//                                 open
//                                   ? 'text-yellow-700'
//                                   : 'border-transparent text-gray-700 hover:text-gray-900',
//                                 'relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px'
//                               )}
//                             >
//                               {category.name}
//                             </Popover.Button>
//                           </div>

//                           <Transition
//                             as={Fragment}
//                             enter="transition ease-out duration-200"
//                             enterFrom="opacity-0"
//                             enterTo="opacity-100"
//                             leave="transition ease-in duration-150"
//                             leaveFrom="opacity-100"
//                             leaveTo="opacity-0"
//                           >
//                             <Popover.Panel className="absolute top-full inset-x-0 text-sm text-gray-500">
//                               {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
//                               <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

//                               <div className="relative bg-white">
//                                 <div className="max-w-7xl mx-auto px-8">
//                                   <div className="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
//                                     <div className="col-start-2 grid grid-cols-2 gap-x-8">
//                                       {category.featured.map((item) => (
//                                         <div key={item.name} className="group relative text-base sm:text-sm">
//                                           <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
//                                             <img
//                                               src={item.imageSrc}
//                                               alt={item.imageAlt}
//                                               className="object-center object-cover"
//                                             />
//                                           </div>
//                                           <a href={item.href} className="mt-6 block font-medium text-gray-900">
//                                             <span className="absolute z-10 inset-0" aria-hidden="true" />
//                                             {item.name}
//                                           </a>
//                                           <p aria-hidden="true" className="mt-1">
//                                             Know more
//                                           </p>
//                                         </div>
//                                       ))}
//                                     </div>
//                                     <div className="row-start-1 grid grid-cols-3 gap-y-10 gap-x-8 text-sm">
//                                       {category.sections.map((section) => (
//                                         <div key={section.name}>
//                                           <p id={`${section.name}-heading`} className="font-medium text-gray-900">
//                                             {section.name}
//                                           </p>
//                                           <ul
//                                             role="list"
//                                             aria-labelledby={`${section.name}-heading`}
//                                             className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
//                                           >
//                                             {section.items.map((item) => (
//                                               <li key={item.name} className="flex">
//                                                 <a href={item.href} className="hover:text-gray-800">
//                                                   {item.name}
//                                                 </a>
//                                               </li>
//                                             ))}
//                                           </ul>
//                                         </div>
//                                       ))}
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
//                             </Popover.Panel>
//                           </Transition>
//                         </>
//                       )}
//                     </Popover>
//                   ))}

//                   {navigation.pages.map((page) => (
//                     <a
//                       key={page.name}
//                       href={page.href}
//                       className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
//                     >
//                       {page.name}
//                     </a>
//                   ))}
//                 </div>
//               </Popover.Group>

//               <div className="ml-auto flex items-center">
//                 {/* Search */}
//                 <div className="flex lg:ml-6">
//                   <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
//                     <span className="sr-only">Search</span>
//                     <SearchIcon className="w-6 h-6" aria-hidden="true" />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </nav>
//       </header>
//     </div>
//   )
// }

import React from 'react';
import Topbar from './components/topbar/Topbar';

export default function App() {
  return <div>
<Topbar />
  </div>;
}


