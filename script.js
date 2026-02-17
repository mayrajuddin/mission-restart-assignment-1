const productsUrl = "https://fakestoreapi.com/products"

 fetch(productsUrl)
    .then (res => res.json())
    .then (data => getProducts(data))
const getProducts = (products)=>{
  // console.log(products);
    const ProductsLists= document.getElementById('products')

    products.forEach(product => {
      const {rating}=product
        const productCard =document.createElement('div')
        productCard.innerHTML=`
          <div class="card bg-base-100  md:w-96 shadow-sm">
            <figure class="h-60">
              <img
                src=${product.image}
                class="w-full"
              />
            </figure>
            <div class="card-body">
              <div class="flex justify-between capitalize ">
                <div class="badge badge-soft focusBlue text-xs md:text-sm ">${product.category}</div>
                <div class="text-xs md:text-sm">
                  <i class="fa-solid fa-star text-yellow-500 text-xs md:text-sm"></i>
                  <span>${rating.rate}</span>
                  <span>(${rating.count})</span>
                </div>
              </div>
              <p class="text-sm md:text-base">
                ${product.title}
              </p>
              <div class="card-actions text-sm capitalize">
                <button class="btn flex-1 capitalize">
                  <i class="fa-regular fa-eye"></i>
                  details
                </button>
                <button class="btn btnprimary text-white flex-1 capitalize">
                  <i class="fa-solid fa-cart-shopping"></i> buy Now
                </button>
              </div>
            </div>
          </div>          
        `
        ProductsLists.append(productCard)
    });
}
