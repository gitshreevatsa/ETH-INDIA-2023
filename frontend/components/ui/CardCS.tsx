import React from 'react'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


// Sell tax
// Buy tax
// Total token holders
// Reserves
// Dex traded in most
// Total supply
// Token name
// Honeypot or not
// Total volume traded in the last day

function CardCS({data}:any) {
    console.log(data,"CARD CHECK")
    return (
        <Card className='outline-4 outline-offset-2 outline outline-yellow-200 w-[28rem] text-gray-600'>
            <CardHeader className='flex items-center font-bold'>
                <CardTitle className='font-extrabold'>Token Description</CardTitle>
            </CardHeader>
            <CardContent>
                <div className='flex justify-center flex-col gap-y-4'>
                    <div className='flex gap-x-4 flex-col'>
                        <div className='mt-2 flex flex-row justify-between items-center border-b-4 pb-2 pr-4 border-dotted border-rose-400'>
                            <h1 className='font-semibold mr-2 text-lg'>Sell Tax</h1>
                            <p className='font-bold text-2xl'>{data.sell_tax}</p>
                        </div>
                        <div className='mt-2 flex flex-row justify-between items-center border-b-4 pb-2 pr-4 border-dotted border-rose-400'>
                            <h1 className='font-semibold mr-2 text-lg'>Buy Tax</h1>
                            <p className='font-bold text-2xl'>{data.buy_tax}</p>
                        </div>
                        <div className='mt-2 flex flex-row justify-between items-center border-b-4 pb-2 pr-4 border-dotted border-rose-400'>
                            <h1 className='font-semibold mr-2 text-lg'>HoneyPot</h1>
                            <p className='font-bold text-2xl'>{data.isHoneyPot}</p>
                        </div>
                        <div className='mt-2 flex flex-row justify-between items-center border-b-4 pb-2 pr-4 border-dotted border-rose-400'>
                            <h1 className='font-semibold mr-2 text-lg'>Name</h1>
                            <p className='font-bold text-xl mt-2'>{data.tokenName}</p>
                        </div>
                        <div className='mt-2 flex flex-col gap-y-2 border-b-4 pb-2 pr-4 border-dotted border-rose-400'>
                            <h1 className='font-semibold mr-2 text-xl'>Dex</h1>
                            <p className='font-bold'>{data.dex}</p>
                        </div>
                        <div className='mt-2 flex flex-row justify-between items-center border-b-4 pb-2 pr-4 border-dotted border-rose-400'>
                            <h1 className='font-semibold mr-2 text-lg'>Token Reserves</h1>
                            <p className='font-bold text-xl mt-2'>{data.tokenReserves}</p>
                        </div>
                        <div className='mt-2 flex flex-row justify-between items-center border-b-4 pb-2 pr-4 border-dotted border-rose-400'>
                            <h1 className='font-semibold mr-2 text-lg'>Total Token Holders</h1>
                            <p className='font-bold text-xl mt-2'>{data.totalHolders}+</p>
                        </div>

                    </div>
                </div>
            </CardContent>
        </Card>
    )
}


export default CardCS