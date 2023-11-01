import axios from 'axios';
import React, { useEffect, useState } from 'react';
import jewelleryImage from '../Images/CategoryImages/diamond-ring.png';
import womenclothingImage from '../Images/CategoryImages/fashion.png';
import electronicsImage from '../Images/CategoryImages/headphones.png';
import MenclothingImage from '../Images/CategoryImages/male-clothes.png';
import ProductDropdown from './DropDown';

export default function CategoryListTop() {
const [categories, setCategories] = useState([]);
const [isDropdownVisible, setIsDropdownVisible] = useState(false);
const [selectedCategory, setSelectedCategory] = useState('');

useEffect(() => {
    fetchCategories();
}, []);

const fetchCategories = async () => {
    try {
    const response = await axios.get('https://fakestoreapi.com/products/categories');
    setCategories(response.data);
    } catch (error) {
    console.error('Error fetching categories:', error);
    }
};

const categoryImages = {
    electronics: electronicsImage,
    "men's clothing": MenclothingImage,
    "women's clothing": womenclothingImage,
    jewelery : jewelleryImage,
    
};

const handleMouseEnter = (category) => {
    setSelectedCategory(category);
    setIsDropdownVisible(true);
};

const handleMouseLeave = () => {
    setIsDropdownVisible(false);
};

return (
    <div className="flex justify-center gap-2 border-t-0 border-b-2">
    {categories.map((category, index) => (
        <div key={index.toString()} className="p-2 w-40 text-center hover:scale-102 transition-transform hover:border relative"
        onMouseEnter={() => handleMouseEnter(category)} onMouseLeave={handleMouseLeave}>
        <img src={categoryImages[category]} alt={category}className="w-14 h-14 mx-auto mb-2"/>
        <p>{category}</p>
        {isDropdownVisible && selectedCategory === category && <ProductDropdown />}
        </div>
    ))}
    </div>
);
}
