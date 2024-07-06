import React from 'react'
import Banner from '../Components/Banner'
import BestSellerBooks from './BestSellerBooks'
import FavBooks from './FavBooks'
import PromoBanner from './PromoBanner'
import OtherBooks from './OtherBooks'
import Review from './Review'
import BookCards from '../Components/BookCards';



const Home = () => {
  return (
    <div>
      <Banner/>
      <BestSellerBooks/>
      <FavBooks/>
      <PromoBanner/>
      <OtherBooks/>
      <Review/>
    </div>
  )
}

export default Home
