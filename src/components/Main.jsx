import React from 'react'
import './Main.css'

export const Main = () => {

    return (
        <>
            <main>
                <div className="container">
                    <div className="left-side">
                        <h1>YOUR FEET DESERVE THE BEST </h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus recusandae magnam voluptatem!</p>
                        <div className="btn">
                            <button>Shop now</button>
                            <button>Category</button>
                        </div>
                    </div>
                    <div className="right-side">
                        <img src="../public/images/shoes.png" alt="" />
                    </div>
                </div>

            </main>
        </>
    )
}

export default Main