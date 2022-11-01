import React from 'react'
import HomeSearchCondition from './Cards/HomeSearchCondition'
import HomeSearchResult from './Cards/HomeSearchResult'

const products = () => {
  return (
    <section className="bg0 p-t-23 p-b-140">
      <div className="container">
        <HomeSearchCondition />
        <HomeSearchResult />
        {/* <!-- Load more --> */}
        <div className="flex-c-m flex-w w-full p-t-45">
          <a
            href="#"
            className="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04"
          >
            Load More
          </a>
        </div>
      </div>
    </section>
  )
}

export default products