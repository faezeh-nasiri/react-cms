import React, { useState } from 'react';
import './AddNewProduct.css';

export default function AddNewProduct() {

    // const [newProductTitle, setNewProductTitle] = useState('')
    // const [newProductPrice, setNewProductPrice] = useState('')
    // const [newProductCount, setNewProductCount] = useState('')
    // const [newProductImg, setNewProductImg] = useState('')
    // const [newProductPopularity, setNewProductPopularity] = useState('')
    // const [newProductSale, setNewProductSale] = useState('')
    // const [newProductColors, setNewProductColors] = useState('')

    // const newProductsInfos = {
    //     title: newProductTitle,
    //     price: newProductPrice,
    //     count: newProductCount,
    //     img: newProductImg,
    //     popularity: newProductPopularity,
    //     sale: newProductSale,
    //     colors: newProductColors
    // }

    // const AddNewProduct = (event) => {

    //     event.preventDefault()

    //     fetch(`http://localhost:8000/api/products`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(newProductsInfos)
    //     }).then(res => res.json())
    //     .then(result => {
    //         console.log(result);
    //     })
    // }

    const [newProductTitle, setNewProductTitle] = useState('')
    const [newProductPrice, setNewProductPrice] = useState('')
    const [newProductCount, setNewProductCount] = useState('')
    const [newProductImg, setNewProductImg] = useState('')
    const [newProductPopularity, setNewProductPopularity] = useState('')
    const [newProductSale, setNewProductSale] = useState('')
    const [newProductColors, setNewProductColors] = useState('')

    const newProductInfos = {
        title: newProductTitle,
        price: newProductPrice,
        count: newProductCount,
        img: newProductImg,
        popularity: newProductPopularity,
        sale: newProductSale,
        colors: newProductColors,
    }

    const AddNewProduct = (event) => {
        event.preventDefault()

        fetch(`http://localhost:8000/api/products`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProductInfos)
        })
            .then(res => {
                console.log('کد وضعیت پاسخ:', res.status)
                return res.text()
            })
            .then(text => {
                console.log('متن پاسخ دریافتی:', text || 'بدنه خالی بود')
            })}



        return (
            <div className="products-main">
                <h1 className='product-title'>افزودن محصول جدید</h1>

                <form action="#" className="add-products-form">
                    <div className="add-products-form-wrap">
                        <div className="add-products-form-group">
                            <input type="text"
                                placeholder='اسم محصول را بنویسید'
                                className='add-products-input'
                                value={newProductTitle}
                                onChange={(event) => setNewProductTitle(event.target.value)} />
                        </div>
                        <div className="add-products-form-group">
                            <input type="text"
                                placeholder='قیمت محصول را بنویسید'
                                className='add-products-input'
                                value={newProductPrice}
                                onChange={(event) => setNewProductPrice(event.target.value)} />
                        </div>
                        <div className="add-products-form-group">
                            <input type="text"
                                placeholder='موجودی محصول را بنویسید'
                                className='add-products-input'
                                value={newProductCount}
                                onChange={(event) => setNewProductCount(event.target.value)} />
                        </div>
                        <div className="add-products-form-group">
                            <input type="text"
                                placeholder='آدرس عکس محصول را بنویسید'
                                className='add-products-input'
                                value={newProductImg}
                                onChange={(event) => setNewProductImg(event.target.value)} />
                        </div>
                        <div className="add-products-form-group">
                            <input type="text"
                                placeholder='میزان محبوبیت محصول را بنویسید'
                                className='add-products-input'
                                value={newProductPopularity}
                                onChange={(event) => setNewProductPopularity(event.target.value)} />
                        </div>
                        <div className="add-products-form-group">
                            <input type="text"
                                placeholder='میزان فروش محصول را بنویسید'
                                className='add-products-input'
                                value={newProductSale}
                                onChange={(event) => setNewProductSale(event.target.value)} />
                        </div>
                        <div className="add-products-form-group">
                            <input type="text"
                                placeholder='تعداد رنگ بندی محصول را بنویسید'
                                className='add-products-input'
                                value={newProductColors}
                                onChange={(event) => setNewProductColors(event.target.value)} />
                        </div>
                    </div>
                    <button className='add-products-submit' onClick={AddNewProduct}>ثبت محصول</button>
                </form>
            </div>
        )
    }
