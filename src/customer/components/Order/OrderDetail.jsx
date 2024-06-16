import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import { Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import { StarIcon } from '@heroicons/react/24/outline'


const OrderDetail = () => {
  return (
    <div className='px-5 lg:px-20'>
        <div>
            <h1 className='font-semibold text-xl py-7'></h1>
            <AddressCard/>
        </div>
        <div>
            <OrderTracker activeStep={3}/>
        </div>

        <Grid className='space-y-4' container>
            {[1,1,1,1,1,1].map((item) => <Grid item container className='shadow-xl rounded-md p-5 border' sx={{alignItems:"center", justifyContent:'space-between'}}>
                <Grid item xs={6}>
                    <div className='flex items-center space-x-4'>
                        <img className='w-[5rem] h-[6rem] object-cover object-top' src="https://rukminim1.flixcart.com/image/612/612/xif0q/ethnic-set/b/4/m/m-na-kurta-set-010-rama-woxen-original-imagzkgg8mnyxmcg.jpeg?q=70" alt="" />
                        <div className='space-y-2 ml-5'>
                            <p className='font-semibold'>Men Slim Mid Rise Black Jeans</p>
                            <p className='space-x-5 opacity-50 text-xs font-bold'>
                                <span>
                                    Color:pink
                                </span>
                                <span>
                                    Size: M
                                </span>
                            </p>
                            <p className='font-semibold'>Seller: linaris</p>
                            <p className='font-semibold'>1099$</p>

                        </div>
                    </div>
                </Grid>
            </Grid>)}
        </Grid>
    </div>
    
  )
}

export default OrderDetail