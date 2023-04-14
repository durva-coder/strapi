import React from 'react'
import Link from 'next/link'
import axios from 'axios'


const Products = ({products, addToCart}) => {
    const apiUrl = 'http://localhost:1337';
    return (
        <div className='container mx-auto px-4'>
            <section className="text-gray-600 body-font">
                <div className="container px-5 md:py-24 mx-auto">
                    <div className="flex flex-wrap w-full md:mb-20">
                        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">Product List - My Shop</h1>
                            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                        </div>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        {products.data.map((item) => {
                            return (
                                <div key={item.attributes.slug} className="xl:w-1/4 md:w-1/2 p-4">
                                    <div className="bg-gray-100 p-6 rounded-lg">
                                        <img className="h-96 rounded m-auto mb-8" src={`${apiUrl}${item?.attributes?.image?.data?.attributes?.url}`} alt="content" />
                                        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{item.attributes.category}</h3>
                                        <h2 className="text-lg text-gray-900 font-medium title-font mb-4 h-10">{item.attributes.title}</h2>
                                        <div className='hidden bg-green-800 bg-red-800 bg-blue-800 bg-yellow-800 bg-black-800 bg-orange-800 bg-white-800'></div>
                                        <button className={"border-2 border-gray-300 ml-1 rounded-full w-6 h-6 focus:outline-none " + `bg-${item.attributes.color}-800`}></button>
                                        <p className="leading-relaxed text-base md:overflow-hidden md:whitespace-nowrap md:text-ellipsis">{item.attributes.description}</p>
                                        <button onClick={()=> {addToCart(item.attributes.title,1, item.attributes.price)}} className="me-2 my-2 text-white bg-yellow-500 border-0 py-1 md:py-2 px-2 md:px-4 focus:outline-none hover:bg-warning-600 rounded text-sm">Add to Cart</button>
                                        <Link href={`/product/${item.attributes.slug}`}><button className ="me-2 my-2 text-white bg-indigo-500 border-0 py-1 md:py-2 px-2 md:px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm">Buy Now</button></Link>

                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}


export async function getServerSideProps(context) {
    let headers = { Authorization: "Bearer 870139890f56579121ecc2f4bd40850673a8c192881dc5a4f18cb3af974f4e254d376c9764c6fe40be6cb0472ef24b1451d39427c53a9f8ae627d80bae6d7c2ff86e9b87ced6f83145c6bc544c1aa899a63a1954f0e429c9a2310d01ef383b720588d1f9a9743d27c929da086b32677bb61abe9a40153e53859d8e0e7f46536f" }
    const a = await fetch("http://localhost:1337/api/products?populate=*", { headers: headers })
    const products = await a.json()
    console.log(products);
    // console.log('hgfhgfh', products.data[3].attributes.image.data.attributes.url);
    return {
        props: { products: products },
    }
}

export default Products