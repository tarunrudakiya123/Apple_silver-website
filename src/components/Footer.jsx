import React from 'react'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs">
            Want to build Website ?  {' '}
            <a href='https://tarun-rudakiya-portfolioapp.netlify.app/' target='_blank' className="underline text-blue">
            Visit Tarun's Website {' '}
            </a>
            or  call {' '}
            <span className="underline text-blue">
             +91 9558930235
            </span>{' '}
            for Inquiry
          </p>
          
        </div>

        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">Copright @ 2024 Developed by  <a href='https://tarun-rudakiya-portfolioapp.netlify.app/' target='_blank' className="underline text-blue">
           Tarun Rudakiya
            </a> All rights reserved.</p>

          <div className="flex">
            {footerLinks.map((link, i) => (
              <p key={link} className="font-semibold text-gray text-xs">
                {link}{' '}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer