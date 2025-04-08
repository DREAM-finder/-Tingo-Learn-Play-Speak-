import React from 'react'
import Header from './header'
import Footer from './footer';

// this Props and children will changed this page to a layout page
// this wont be shown in the url
// this is a layout page for the marketing pages
type Props = {
  children: React.ReactNode
};

const MainLayout = ({children}: Props) => {
  return (
    <div className='min-h-screen flex flex-col'>
        <Header/>
        <main className='flex-1 flex flex-col items-center justify-center'>
            {children}
        </main>
        <Footer/>
        </div>
  )
}

export default MainLayout