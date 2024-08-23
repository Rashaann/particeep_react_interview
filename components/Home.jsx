import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';

import Filter from './Filter';
import Movies from './Movies';
import Pagination from './Pagination';


import { movies$ } from '../movies';
import { useDispatch, useSelector } from 'react-redux';
import { initialAddOfMovies, updateOfMovies } from '../reducers/moviz';

export default function Home() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(4);

    const reducerMovies = useSelector((state) => state.moviz.value.movies);
    const dispatch = useDispatch();


    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const moviesData = await movies$;
                
                if(reducerMovies.length == 0) {
                    console.log('reducer', moviesData)
                    dispatch(initialAddOfMovies(moviesData));
                    setMovies(moviesData);
                } else {
                    console.log('reducer', moviesData)
                    setMovies(reducerMovies);
                }

            } catch (error) {
                console.error("Failed to load: ", error);
            } finally {
                setLoading(false);
            }
        }

        fetchMovies();
        setCurrentPage(1);
        
    }, [selectedCategories, itemsPerPage]);




    const handleDelete = (id) => {
        setMovies(movies.filter(movie => movie.id !== id));
        console.log("moviess => ", movies);
        dispatch(updateOfMovies(movies.filter(movie => movie.id !== id)));
    }

    const handleToggleLike = (id, liked) =>{
        setMovies(movies.map(movie => {
            movie.id === id ? {...movie, likes: liked ? movie.likes + 1 : movie.likes - 1, dislikes: liked ? movie.dislikes -1 : movie.dislikes + 1 } : movie
        }));
        dispatch(updateOfMovies(movies.map(movie => {
            movie.id === id ? {...movie, likes: liked ? movie.likes + 1 : movie.likes - 1, dislikes: liked ? movie.dislikes -1 : movie.dislikes + 1 } : movie
        })));
    };

    const categories = Array.from(new Set(movies.map((movie) => movie?.category)));
    const filteredMovies = movies.filter(movie => selectedCategories.length === 0 || selectedCategories.includes(movie.category));
  
    const totalPages = Math.ceil(filteredMovies.length / itemsPerPage);
    const displayedMovies = filteredMovies.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <div className={styles.app}>
        <h1>Moviz</h1>
        <Filter categories={categories} selectedCategories={selectedCategories} onChange={setSelectedCategories} />
        <Movies movies={displayedMovies} onDelete={handleDelete} onToggleLike={handleToggleLike} />
        <Pagination 
            currentPage={currentPage} 
            totalPages={totalPages} 
            onPageChange={setCurrentPage}
            itemsPerPage={itemsPerPage}
            onItemsPerPageChange={setItemsPerPage}
        />
        </div>
    );
}
