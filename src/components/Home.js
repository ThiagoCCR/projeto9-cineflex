import { useState, useEffect } from 'react';
import axios from 'axios';


export default function Home(){

    const [movies, setMovies] = useState([]);

	const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

	useEffect(() => {
		const requisicao = axios.get("http://...");

		requisicao.then(resposta => {
			setMovies(...promise.data);
		});
	}, []);

    return (
        <>
        <header>
            <h1>CINEFLEX</h1>
        </header>
        <div className="main">
            <div className="title">
                <h1>Selecione o filme</h1>
            </div>
            <div className="container">
                <div className="movie"></div>
                <div className="movie"></div>
                <div className="movie"></div>
                <div className="movie"></div>
                <div className="movie"></div>
                <div className="movie"></div>
                <div className="movie"></div>
                <div className="movie"></div>
                <div className="movie"></div>
                <div className="movie"></div>
            </div>
        </div>
        </>
    )
}