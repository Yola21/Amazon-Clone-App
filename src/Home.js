import React from 'react';
import './Home.css';
import Product from './Product';
// import SimpleImageSlider from 'react-simple-image-slider';

function Home() {
    // const images = [
    //     {url: "https://images-eu.ssl-images-amazon.com/images/G/31/cross-site/Jupiter20/GreatIndianBazaar/Thank-you-1x1x._CB417071277_.jpg"},
    //     {url: "https://images-eu.ssl-images-amazon.com/images/G/31/img18/Collectibles/gif20/diwali_karigar_DesktopHero_1500x600-local._CB417079624_.jpg"},
    //     {url: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/LA/cbccccc/hero/HeroPC_1500x600_pc_02._CB417108384_.jpg"},
    //     {url: "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Toys/GW/Amazon_GRD_DesktopHero_Template_1500x600-5._CB417293634_.jpg"},
    //     {url: "https://images-eu.ssl-images-amazon.com/images/G/31/img19/HeroNov/PChero_Bundle1Xllll._CB417285274_.jpg"},
    //     {url: "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Toys/MadeinIndia/Amazon_GRD_DesktopHero_Template_1500x600-5._CB417121578_.jpg"},
    // ];

    return (
        <div className="home"> 
            {/* <SimpleImageSlider
                className="home__image"
                width={ 1500 }
                height={ 600 }
                images={ images }
                style= {{ zIndex: "-1" }}
            /> */}
            
            <img 
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Collectibles/gif20/diwali_karigar_DesktopHero_1500x600-local._CB417079624_.jpg" 
                alt=""
            />

            <div className="home__row">
                <Product
                    id="123"
                    title="boAt Airdopes 441 TWS Ear-Buds with IWP Technology, Immersive Audio, Up to 30H Total Playback, IPX7 Water Resistance, Super Touch Controls, Secure Sports Fit & Type-C Port(Spirit Lime)"
                    price={1999}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/41oc1XtI8XL.__AC_SY200_.jpg"
                />

                <Product
                    id="456"
                    title="Samsung Galaxy Tab A7 (10.4 inch, RAM 3 GB, ROM 32 GB, Wi-Fi-only), Grey"
                    price={16999.00}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71g9138yHKL._SL1500_.jpg"
                />    
            </div>

            <div className="home__row">
                <Product
                    id="789"
                    title="AmazonBasics 468 L Frost-Free Side-by-Side Refrigerator (Black, SuperFreeze Function)"
                    price={35149.00}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/5160SoMxXnL._SL1500_.jpg"
                />

                <Product
                    id="321"
                    title="Red Chief Men's RC3467 Formal Shoes"
                    price={1800.00}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/71vEPOzbRrL._UL1500_.jpg"
                />

                <Product
                    id="654"
                    title="OPPO A53 (Fancy Blue, 4GB RAM, 64GB Storage) with No Cost EMI/Additional Exchange Offers"
                    price={12990.00}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71QJyXZYPuL._SL1500_.jpg"
                />    
            </div>

            <div className="home__row">
                <Product
                    id="218"
                    title="ZEBRONICS Gaming Multimedia USB Keyboard & USB Mouse Combo -Transformer"
                    price={1129.00}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/61l3aUqHRVL._SL1000_.jpg"
                />    
            </div>
            
        </div>
    )
}

export default Home
