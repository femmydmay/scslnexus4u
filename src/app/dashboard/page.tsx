import React from 'react'
import Link from 'next/link'
const Dashboard = () => {
    return (
      <>
        <div className="w-[40%] ml-10 bg-red-600 rounded-lg p-4 mt-100 text-white font-bold">
          
          <h1> Test run</h1>
          
        </div>
        <section >
          <Link href="/">Go to home</Link>
        </section>
      </>
    );
}

export default Dashboard;