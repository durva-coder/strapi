import React, { useEffect, useState } from 'react'
import Script from 'next/script'
import Link from "next/link";

const checkout = ({ cart, removeFromCart }) => {
  const [subtotal, setSubtotal] = useState(0)
  const [form, setForm] = useState({ name: "", email: "", phone: "", address: "" })
  useEffect(() => {
    console.log('gdfhfgh',cart);
    
    let myTotal = 0
    for (let index = 0; index < cart.length; index++) {
      const element = cart[index];
      myTotal = myTotal + cart[index][1]
    }
    setSubtotal(myTotal)
  }, [])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    console.log({ ...form, [e.target.name]: e.target.value });
  }

  const handlePrice = (e) =>{
    console.log('t',e);
    console.log('cart',cart);
      let myTotal = 0
      for (let index = 0; index < cart.length; index++) {
        const element = cart[index];
        myTotal = myTotal + cart[index][1]
      }
      setSubtotal(myTotal)
  }

  return (
    <div>

      {/* <Script type="application/javascript" src={`https://securegw.paytm.in/merchantpgpui/checkoutjs/merchants/${process.env.NEXT_PUBLIC_MID}.js`} onload="onScriptLoad();" crossorigin="anonymous"></Script> */}
      {/* <Script> */}
        {/* function onScriptLoad(){ */}
         {/* var config = { */}
           {/* "root": "",
         "flow": "DEFAULT",
         "data": { */}
           {/* "orderId": "",  */}
          
         {/* "token": "",  */}
     
         {/* "tokenType": "TXN_TOKEN", */}
         {/* "amount": ""  */}

         {/* }, */}
         {/* "handler": { */}
          {/* "notifyMerchant": function(eventName,data){ */}
           {/* console.log("notifyMerchant handler function called");
         console.log("eventName => ",eventName);
         console.log("data => ",data);
         }
         }
         }; */}
         {/* if(window.Paytm && window.Paytm.CheckoutJS){ */}
           {/* window.Paytm.CheckoutJS.onLoad(function excecuteAfterCompleteLoad() { */}
              {/* initialze configuration using init method */}
             {/* window.Paytm.CheckoutJS.init(config).then(function onSuccess() { */}
               {/* // after successfully updating configuration, invoke JS Checkout
               window.Paytm.CheckoutJS.invoke();
             }).catch(function onError(error) { */}
               {/* console.log("error => ", error);
            });
          });
       }
       }
       </Script> */}

      <section className="text-white-600 body-font relative">
        <div className="container px-5 py-24 mx-auto min-h-screen">
          <div className="flex flex-col w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white-900">Checkout</h1>
            <h2 className='text-2xl font-medium'>Cart</h2>
            <div className='cart'>{cart.length ? `Your cart details are as follows:` : `Your cart is empty!`}</div>
            <ul className='list-decimal px-8'>
              {cart.map((item) => {
                console.log('items',item);
                return <li>
                  {item[0]} with a price of ₹{item[1]}<button className="flex ml-auto text-white bg-red-500 border-0 py-2 mx-2 px-2 focus:outline-none hover:bg-red-600 rounded" onClick={()=> {removeFromCart(item,1); handlePrice()}}> Remove From Cart</button>
                </li>
              })}
            </ul>
            <div className="font-bold">
              Subtotal: {subtotal}
            </div>
          </div>
          <form action="/success" method="get">
          <div className="">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
              
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-white-600">Name</label>
                  <input onChange={handleChange} value={form.name} type="text" id="name" name="name" required className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-gray-300 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-white-600">Email</label>
                  <input onChange={handleChange} value={form.email} type="email" id="email" name="email" required className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-gray-300 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-1/2  ">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-white-600">Phone</label>
                  <input onChange={handleChange} value={form.phone} type="phone" id="phone" name="phone" required className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-gray-300 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="address" className="leading-7 text-sm text-white-600">Address</label>
                  <textarea onChange={handleChange} value={form.address} id="address" name="address" required className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-gray-300 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
              <button type='submit' className="flex text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Pay Now</button>
              </div>
              
            </div>
          </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default checkout