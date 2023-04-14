import React from 'react'
import { useRouter } from 'next/router'

const Slug = ({product, addToCart}) => {
    const apiUrl = 'http://localhost:1337';
    const router = useRouter()
    const {slug} = router.query
  return (
    <div>
        <section className="text-gray-600 body-font overflow-hidden min-h-screen">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={`${apiUrl}${product?.attributes?.image?.data?.attributes?.url}`} />
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-white tracking-widest">My Shop</h2>
        <h1 className="text-white text-3xl title-font font-medium mb-1">{product.attributes.title}</h1>
        <div className="flex mb-4">
          
        </div>
        <p className="leading-relaxed text-white">{product.attributes.description}</p>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
          <div className="flex">
            <span className="mr-3 text-white">Color</span>
            <div className='hidden bg-green-800 bg-red-800 bg-blue-800 bg-yellow-800 bg-black-800 bg-orange-800 bg-white-800'></div>
            <button className={"border-2 border-gray-300 ml-1 rounded-full w-6 h-6 focus:outline-none " + `bg-${product.attributes.color}-800`}></button>
           
          </div>
          <div className="flex ml-6 items-center">
            <span className="mr-3 text-white">Size: {product.attributes.size}</span>
            
          </div>
        </div>
        <div className="flex">
          <span className="title-font font-medium text-2xl text-white">₹{product.attributes.price}</span>
          <div className='flex mx-2'>
            <button onClick={()=> {addToCart(product.attributes.title,1, product.attributes.price)}} className="flex ml-auto text-white bg-indigo-500 border-0 py-2 mx-2 px-2 focus:outline-none hover:bg-indigo-600 rounded">Add to Cart</button>
            <button onClick={()=> {router.push('/checkout')}} className="flex ml-auto text-white bg-indigo-500 border-0 py-2 mx-2 px-2 focus:outline-none hover:bg-indigo-600 rounded">Checkout</button>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export async function getServerSideProps(context) {
    console.log('slug',context.query.slug); 
    let headers = { Authorization: "Bearer 870139890f56579121ecc2f4bd40850673a8c192881dc5a4f18cb3af974f4e254d376c9764c6fe40be6cb0472ef24b1451d39427c53a9f8ae627d80bae6d7c2ff86e9b87ced6f83145c6bc544c1aa899a63a1954f0e429c9a2310d01ef383b720588d1f9a9743d27c929da086b32677bb61abe9a40153e53859d8e0e7f46536f" }
    const a = await fetch("http://localhost:1337/api/products?populate=*&filters[slug]=" + context.query.slug, { headers: headers })
    const product = await a.json()
    console.log(product);
    // console.log('hgfhgfh', products.data[3].attributes.image.data.attributes.url);
    return {
        props: { product: product.data[0] },
    }
}

export default Slug