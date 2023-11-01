import React from 'react'
// import { Layout } from './Layout'
export default function PaymentPage() {
return (
    <>
    {/* <Layout/> */}
    <div className="flex justify-center items-center h-screen bg-gray-100">
    <div className="bg-white p-8 shadow-md rounded-md w-1/2">
    <h2 className="text-2xl mb-4">Payment Details</h2>
    <form>
        <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Card Number</label>
        <input type="text" className="mt-1 p-2 border rounded-md w-full" />
        </div>
        <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
        <input type="text" className="mt-1 p-2 border rounded-md w-1/2" placeholder="MM/YY" />
        </div>
        <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">CVC</label>
        <input type="text" className="mt-1 p-2 border rounded-md w-1/4" />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" type="submit">
        Pay Now
        </button>
    </form>
    </div>
</div>
    </>

)
}
