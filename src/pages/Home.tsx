import {useState, useEffect} from 'react';
import moviesData from '../data/movies.json';
import {Header} from '../components/Header';
import {Footer} from '../components/Footer';

interface Movie {
        id: number;
        nome: string;
        genero: string;
        imagem: string;
    }

export function Home(){
    const [movies, setMovies] = useState<Movie[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [checkedMovies, setCheckedMovies] = useState<number[]>([]);
    
    function loadMovies(){
        setMovies(moviesData as Movie[]);
    }
    
    useEffect(() => {
        loadMovies()
    },[])

    const filteredMovies = movies.filter((movie) =>
        movie.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
        movie.genero.toLowerCase().includes(searchTerm.toLowerCase())
    );

    function checkedMovie(id: number){
        return (event: React.ChangeEvent<HTMLInputElement>) => {
            const movie = movies.find(m => m.id === id);
            if(movie) {
                if(event.target.checked) {
                    setSelectedMovie(movie);
                    setIsModalOpen(true);
                    setCheckedMovies([...checkedMovies, id]);
                } else {
                    setIsModalOpen(false);
                    setCheckedMovies(checkedMovies.filter(movieId => movieId !== id));
                }
            }
        }
    }

    function closeModal(){
        setIsModalOpen(false);
        setSelectedMovie(null);
    }

    return(
        <div>
            <Header searchTerm={searchTerm} onSearchChange={setSearchTerm} />
            
            {checkedMovies.length > 0 && (
                <div className="checked-counter">
                    🎬 Total de filmes selecionados: <strong>{checkedMovies.length}</strong>
                </div>
            )}
            
            {isModalOpen && selectedMovie && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h2>Filme Selecionado</h2>
                            <button className="modal-close" onClick={closeModal}>✕</button>
                        </div>
                        <div className="modal-body">
                            <img src={selectedMovie.imagem} alt={selectedMovie.nome} className="modal-image" />
                            <div className="modal-info">
                                <p><strong>Nome:</strong> {selectedMovie.nome}</p>
                                <p><strong>Gênero:</strong> {selectedMovie.genero}</p>
                                <p><strong>ID:</strong> {selectedMovie.id}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            
            <div className='container'>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>id</th>
                            <th id='image'>imagem</th>
                            <th id='name'>nome</th>
                            <th id='genre'>gênero</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filteredMovies.map((movie) => (
                            <tr key={movie.id}> 
                                <td><input type="checkbox" id="checkbox" onChange={checkedMovie(movie.id)} /></td>
                                <td>{movie.id}</td>
                                <td>
                                    <img 
                                        src={movie.imagem} 
                                        alt={`Cover of the movie ${movie.nome}`} 
                                        style={{ width: '100px', height: 'auto', display: 'block' }} 
                                    />
                                </td>
                                <td>{movie.nome}</td>
                                <td>{movie.genero}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Footer />
        </div>
    )
}