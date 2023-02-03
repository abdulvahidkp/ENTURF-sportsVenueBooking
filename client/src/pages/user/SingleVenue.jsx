import React from 'react';
import UserNavbar from '../../components/user/UserNavbar';
import SingleVenuejsx from '../../components/user/SingleVenuejsx';
import BookingSection from '../../components/user/BookingSection';
import UserFooter from '../../components/user/UserFooter';
import TurfDetailsPart from '../../components/user/TurfDetailsPart';

function SingleVenue() {
  return (
    <div>
      <UserNavbar/>
      <SingleVenuejsx/>
      <BookingSection/>
      {/* <TurfDetailsPart/> */}
      <UserFooter/>
    </div>
  )
}

export default SingleVenue
