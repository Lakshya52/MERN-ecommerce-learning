import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterProducts } from '../actions/productAction';

const Filter = () => {
    const [searchKey, setSearchKey] = useState('');
    const [sort, setSort] = useState('popular');
    const [category, setCategory] = useState('all');

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(filterProducts(searchKey, sort, category));
    };

    return (
        <form
            className="w-screen px-10 flex items-center justify-between mt-5 mb-10"
            onSubmit={submitHandler}
        >
            <input
                type="text"
                value={searchKey}
                onChange={(e) => setSearchKey(e.target.value)}
                placeholder="Search Products"
                className="outline-none border p-2 rounded-lg w-[30%]"
            />

            <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="w-[20%] outline-none border p-2 rounded-lg cursor-pointer"
            >
                <option value="popular">Popular</option>
                <option value="htl">High to Low</option>
                <option value="lth">Low to High</option>
            </select>

            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-[20%] outline-none border p-2 rounded-lg cursor-pointer"
            >
                <option value="all">All</option>
                <option value="vcards">Visiting Cards</option>
                <option value="envelopes">Envelopes</option>
                <option value="tshirt">T-shirts</option>
                <option value="mpads">Mouse pads</option>
            </select>

            <button
                type="submit"
                className="w-[20%] cursor-pointer bg-black text-white hover:bg-gray-900 p-2 rounded-lg"
            >
                Search
            </button>
        </form>
    );
};

export default Filter;
