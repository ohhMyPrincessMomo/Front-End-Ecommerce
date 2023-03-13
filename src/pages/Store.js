import React from 'react'
import ProductCard from '../components/ProductCard'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import ReactStars from "react-rating-stars-component";
import Color from '../components/Color';
const Store = () => {
  const ratingChanged = (e) => {
    console.log(e);
  }
  const [grid,setGrid] = React.useState(4);
  console.log(grid);
  const gridSetter = (i) => {
    setGrid(i);
  }
  return (
    <div>
        <Meta title="Our store"/>
        <BreadCrumb title="Our Store"/>
        <div className="store-wrapper home-wrapper-2 py-5">
          <div className='container-xxl'>
            <div className="row">
              <div className="col-3">
                <div className="filter-card mb-3">
                  <h3 className="filter-title">Shop By Categories</h3>
                  <div>
                    <ul className='ps-0'>
                      <li>Watch</li>
                      <li>TV</li>
                      <li>Camera</li>
                      <li>Laptop</li>
                    </ul>
                  </div>
                </div>
                <div className="filter-card mb-3">
                  <h3 className="filter-title">Filter By</h3>
                  <h5 className="sub-title">Availability</h5>
                  <div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="in-stock"/>
                      <label className="form-check-label" htmlFor="in-stock">
                        In Stock(1)
                      </label>
                    </div>
                    <div>
                      <input className="form-check-input" type="checkbox" value="" id="out-of-stock"/>
                      <label className="form-check-label" htmlFor="out-of-stock">
                        Out of Stock(0)
                      </label>
                    </div>
                  </div>
                  <h5 className="sub-title">Price</h5>
                  <div className="d-flex align-items-center gap-1">
                    <div className="form-floating mb-3">
                      <input type="email" className="form-control"  id="floatingInput" placeholder="from"/>
                      <label htmlFor="floatingInput">From</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input type="email" className="form-control"  id="floatingInput1" placeholder="to"/>
                      <label htmlFor="floatingInput1">To</label>
                    </div>

                  </div>
                  <h5 className="sub-title">Colors</h5>
                    <div>
                      <Color/>
                    </div>
                  <h5 className="sub-title mt-3">Size</h5>
                  <div>
                    <div className='form-check'>
                      <input className="form-check-input"
                      type="checkbox"
                      value=""
                      id="color-1"
                      />
                      <label className="form-check-label" htmlFor="color-1">
                         S (2)
                      </label>
                    </div>
                    <div className='form-check'>
                      <input className="form-check-input"
                      type="checkbox"
                      value=""
                      id="color-2"
                      />
                      <label className="form-check-label" htmlFor="color-2">
                         M (2)
                      </label>
                    </div>
                  </div>

                  
                
                </div>
                <div className="filter-card mb-3">
                  <h3 className="filter-title">Product Tags</h3>
                  <div>
                    <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                      <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                        Headphone
                      </span>
                      <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                        Laptop
                      </span>
                      <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                       Mobile
                      </span>
                      <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                        Wire
                      </span>
                    </div>
                  </div>
                </div>
                <div className="filter-card mb-3">
                  <h3 className="filter-title">Random Prodcuts</h3>
                  <div>
                    <div className="random-products d-flex mb-3">
                      <div className="w-25">
                        <img src="images/images/watch.jpg" className="img-fluid" alt="watch"/>
                      </div>
                      <div className="w-50">
                        <h5>Kids headphones bulk 10 pack multi colored for students</h5>
                        <ReactStars
                          count={5}
                          onChange={ratingChanged}
                          size={24}
                          value={3}
                          edit={false}
                          activeColor="#ffd700"
                        />
                        <b>$ 300</b>
                      </div>
                    </div>
                    <div className="random-products d-flex">
                      <div className="w-25">
                        <img src="images/images/watch.jpg" className="img-fluid" alt="watch"/>
                      </div>
                      <div className="w-50">
                        <h5>Kids headphones bulk 10 pack multi colored for students</h5>
                        <ReactStars
                          count={5}
                          onChange={ratingChanged}
                          size={24}
                          value={3}
                          edit={false}
                          activeColor="#ffd700"
                        />
                        <b>$ 300</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-9">
                <div className="filter-sort-grid mb-4">
                  <div className='d-flex align-items-center justify-content-between'>
                    <div className="d-flex align-items-center gap-1">
                      <p className="mb-0" style={{width: '100px'}}>Sort By:</p>
                      <select
                        name=""
                        className="form-control form-select" id="" defaultValue={"best-selling"}>
                          <option value="manual" >Featured</option>
                          <option value="best-selling">Best Selling</option>
                          <option value="title-ascending">Alphabetically, A-Z</option>
                          <option value="title-descending">Alphabetically, Z-A</option>
                          <option value="price-ascending">Price, low to high</option>
                          <option value="price-descending">Price, high to low</option>
                          <option value="created-ascending">Date, old to new</option>
                          <option value="created-descending">Date, new to old</option>
                        </select>
                    </div>
                    <div className="d-flex align-items-center gap-1">
                      <p className="totalproducts mb-0">21 Products</p>
                      <div className='d-flex align-items-center gap-1 grid'>
                          <img src="images/images/gr4.svg"
                           className="img-fluid d-block"
                            alt="grid"
                            onClick={() => {
                              setGrid(3)
                            }}/>
                          <img src="images/images/gr3.svg"
                           className="img-fluid d-block"
                            alt="grid"
                            onClick={() => {
                              setGrid(4)
                            }}/>
                          <img src="images/images/gr2.svg"
                          className="img-fluid d-block"
                           alt="grid"
                           onClick={() => {
                            setGrid(6)
                           }}/>
                          <img src="images/images/gr.svg"
                           className="img-fluid d-block"
                            alt="grid"
                            onClick={() => {
                              setGrid(12)
                            }}/>
                      </div>
                    </div>
                  </div>
                  <div className="products-list pb-5">
                    <div className="d-flex flex-wrap gap-1">
                      <ProductCard grid={grid} isStore={true}/>
                      <ProductCard grid={grid} isStore={true}/>
                      <ProductCard grid={grid} isStore={true}/>
                      <ProductCard grid={grid} isStore={true}/>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Store