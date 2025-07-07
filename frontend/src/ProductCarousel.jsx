import React, { useState } from 'react';
import Slider from 'react-slick';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function PrevArrow({ className, style, onClick }) {
    return (
        <div
            className={className}
            style={{
                ...style,
                position: 'absolute',
                top: '50%',
                left: -30,
                transform: 'translate(-50%, -50%)',
                zIndex: 1,
                cursor: 'pointer',
                color: '#333'
            }}
            onClick={onClick}
        >
            <FiChevronLeft size={36} strokeWidth={2} />
        </div>
    );
}

function NextArrow({ className, style, onClick }) {
    return (
        <div
            className={className}
            style={{
                ...style,
                position: 'absolute',
                top: '50%',
                right: -30,
                transform: 'translate(50%, -50%)',
                zIndex: 1,
                cursor: 'pointer',
                color: '#333'
            }}
            onClick={onClick}
        >
            <FiChevronRight size={36} strokeWidth={2} />
        </div>
    );
}

function renderStars(rating) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (rating >= i) {
            stars.push(<FaStar key={i} color="#EAB308" size={20} />);
        } else if (rating >= i - 0.5) {
            stars.push(<FaStarHalfAlt key={i} color="#EAB308" size={20} />);
        } else {
            stars.push(
                <FaRegStar
                    key={i}
                    color="#EAB308"
                    size={20}
                    style={{ opacity: 0.3 }}
                />
            );
        }
    }
    return (
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
            {stars}
        </div>
    );
}

function ProductCard({ product }) {
    const rawRating =
        typeof product.rating === 'number'
            ? product.rating
            : parseFloat(product.ratingFormatted) || 0;
    const formattedRating =
        product.ratingFormatted || `${rawRating.toFixed(1)}/5`;

    const [color, setColor] = useState('yellow');
    const colorMap = {
        yellow: '#E6CA97',
        white: '#D9D9D9',
        rose: '#E1A4A9'
    };
    const colorNameMap = {
        yellow: 'Yellow Gold',
        white: 'White Gold',
        rose: 'Rose Gold'
    };

    return (
        <div style={{ padding: 10, boxSizing: 'border-box' }}>
            <div
                style={{
                    background: '#F7F7F7',
                    borderRadius: 16,
                    overflow: 'hidden',
                    padding: 0,
                    height: 200,        // tasarıma göre ayarla
                    boxSizing: 'border-box'
                }}
            >
                <img
                    src={product.images[color]}
                    alt={product.name}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block'
                    }}
                />
            </div>

            <div style={{ display: 'flex', gap: 8, margin: '10px 0' }}>
                {Object.keys(product.images).map((key) => (
                    <div
                        key={key}
                        onClick={() => setColor(key)}
                        style={{
                            width: 20,
                            height: 20,
                            borderRadius: '50%',
                            background: colorMap[key],
                            cursor: 'pointer',
                            border: color === key ? '2px solid #000' : '1px solid #ccc'
                        }}
                    />
                ))}
            </div>
            <p
                style={{
                    margin: '0 0 10px',
                    fontFamily: 'Avenir, sans-serif',
                    fontWeight: 400,
                    fontSize: 12,
                    color: '#333',
                    textAlign: 'left'
                }}
            >
                {colorNameMap[color]}
            </p>

            <h3
                style={{
                    margin: '0 0 5px',
                    textAlign: 'left',
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 500,
                    fontSize: 15
                }}
            >
                {product.name}
            </h3>

            <p
                style={{
                    margin: '0 0 10px',
                    textAlign: 'left',
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 400,
                    fontSize: 15,
                    color: '#555'
                }}
            >
                {product.priceFormatted}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                {renderStars(rawRating)}
                <span
                    style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: 400,
                        fontSize: 15,
                        color: '#333'
                    }}
                >
          {formattedRating}
        </span>
            </div>
        </div>
    );
}

export default function ProductCarousel({ products }) {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        slidesToShow: 4,
        slidesToScroll: 1,
        rows: 1,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } }
        ]
    };

    return (
        <Slider {...settings}>
            {products.map((p, i) => (
                <ProductCard key={i} product={p} />
            ))}
        </Slider>
    );
}
