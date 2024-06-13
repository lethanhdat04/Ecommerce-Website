import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'
import { mens_kurta } from '../../../Data/men_kurta'
import { mens_jeans } from '../../../Data/men_jeans'
import { dressPage1 } from '../../../Data/page1'
import { mensPantsPage1 } from '../../../Data/men_page1'

const HomePage = () => {
  return (
    <div>
        <MainCarousel/>

        <div className='space-y-10 py-20 px-5 lg:px-10 App'>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"}/>
            <HomeSectionCarousel data={dressPage1} sectionName={"Women's Dress"}/>
            <HomeSectionCarousel data={mensPantsPage1} sectionName={"Men's Pants"}/>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"}/>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"}/>
        </div>
    </div>
  )
}

export default HomePage