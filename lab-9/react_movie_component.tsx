import React, { useState, useEffect } from 'react';

const MovieComponent = () => {
  // Массив фильмов (замените на свои данные по варианту)
  const moviesData = [
    {
      id: 1,
      title: "Муравьи в штанах",
      poster: "https://upload.wikimedia.org/wikipedia/ru/thumb/4/40/Harte_Jungs.jpg/250px-Harte_Jungs.jpg",
      genre: "Кинокомедия, Романтический фильм, Мелодрама, Драма",
      director: " Марк Ротемунд",
      actors: "Тобиас Шенке, Аксель Штайн и др.",
      duration: "95 мин",
      year: "2000",
      country: "США",
      rating: "16+",
      description: "«Муравьи в штанах» — молодёжная кинокомедия производства Германии, снятая в 2000 году режиссёром Марком Ротемундом по мотивам романа 1971 года Альберто Моравиа «Он и я». Тэглайн фильма — «Давай, вперёд!».",
      trailer: "https://www.kinopoisk.ru/film/47679/video/type/0/"
    },
    {
      id: 2,
      title: "Операция «Ы» и другие приключения Шурика",
      poster: "https://upload.wikimedia.org/wikipedia/ru/thumb/b/ba/%D0%9E%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F_%D0%AB_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC_%D0%BF%D0%BB%D0%B0%D0%BA%D0%B0%D1%82.jpeg/330px-%D0%9E%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F_%D0%AB_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC_%D0%BF%D0%BB%D0%B0%D0%BA%D0%B0%D1%82.jpeg",
      genre: "Комедия",
      director: "	Леонид Гайдай",
      actors: "Александр Демьяненко, Алексей Смирнов и др.",
      duration: "90 мин",
      year: "1965",
      country: "СССР",
      rating: "12+",
      description: "Фильм состоит из трех новелл, объединенных фигурой главного героя Шурика, попадающего в самые невероятные ситуации. В «Напарнике» Шурик сражается с хулиганом Верзилой; в «Наваждении» весьма оригинальным способом готовится к экзамену; в «Операции «Ы» предотвращает «ограбление века», на которое идет знаменитая тройка — Балбес, Трус и Бывалый.",
      trailer: "https://www.youtube.com/watch?v=hrvzSFKqifk"
    },
    {
      id: 3,
      title: "Зверополис",
      poster: "https://upload.wikimedia.org/wikipedia/ru/thumb/9/91/Zootopia_poster.jpg/330px-Zootopia_poster.jpg",
      genre: "Мультфильм, Комедия",
      director: "Рич Мур, Байрон Ховард",
      actors: "Джиннифер Гудвин, Джейсон Бейтман и др.",
      duration: "110 мин",
      year: "2016",
      country: "США",
      rating: "6+",
      description: "Добро пожаловать в Зверополис — современный город, населенный самыми разными животными, от огромных слонов до крошечных мышек. Зверополис разделен на районы, полностью повторяющие естественную среду обитания разных жителей — здесь есть и элитный район Площадь Сахары и неприветливый Тундратаун. В этом городе появляется новый офицер полиции, жизнерадостная зайчиха Джуди Хоппс, которая с первых дней работы понимает, как сложно быть маленькой и пушистой среди больших и сильных полицейских. Джуди хватается за первую же возможность проявить себя, несмотря на то, что ее партнером будет болтливый хитрый лис Ник Уайлд. Вдвоем им предстоит раскрыть сложное дело, от которого будет зависеть судьба всех обитателей Зверополиса.",
      trailer: "https://vk.com/video-19043_171534213"
    }
  ];

  const [currentMovie, setCurrentMovie] = useState(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // При загрузке выбираем случайный фильм
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * moviesData.length);
    setCurrentMovie(moviesData[randomIndex]);
  }, []);

  if (!currentMovie) {
    return <div className="loading">Загрузка...</div>;
  }

  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '40px 20px',
      backgroundColor: '#2c2c2c',
      color: '#fff',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Заголовок */}
      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '40px',
        marginBottom: '40px',
        flexWrap: 'wrap'
      }}>
        {/* Постер */}
        <img 
          src={currentMovie.poster} 
          alt={currentMovie.title}
          style={{
            width: '300px',
            borderRadius: '10px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
          }}
        />

        {/* Информация */}
        <div style={{ flex: 1, minWidth: '300px' }}>
          <h1 style={{
            fontSize: '42px',
            marginBottom: '20px',
            color: '#3700ff'
          }}>
            {currentMovie.title}
          </h1>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'auto 1fr',
            gap: '10px 20px',
            fontSize: '16px',
            marginBottom: '30px'
          }}>
            <span style={{ opacity: 0.7 }}>Жанр:</span>
            <span>{currentMovie.genre}</span>

            <span style={{ opacity: 0.7 }}>Режиссер:</span>
            <span>{currentMovie.director}</span>

            <span style={{ opacity: 0.7 }}>В ролях:</span>
            <span>{currentMovie.actors}</span>

            <span style={{ opacity: 0.7 }}>Длительность:</span>
            <span>{currentMovie.duration}</span>

            <span style={{ opacity: 0.7 }}>Год:</span>
            <span>{currentMovie.year}</span>

            <span style={{ opacity: 0.7 }}>Страна:</span>
            <span>{currentMovie.country}</span>

            <span style={{ opacity: 0.7 }}>Рейтинг:</span>
            <span style={{
              display: 'inline-block',
              padding: '2px 8px',
              backgroundColor: '#1a1a1a',
              border: '2px solid #fff',
              borderRadius: '4px',
              fontSize: '14px',
              fontWeight: 'bold'
            }}>
              {currentMovie.rating}
            </span>
          </div>

          {/* Кнопка */}
          <button style={{
            padding: '15px 45px',
            backgroundColor: '#3700ff',
            color: '#fff',
            border: 'none',
            borderRadius: '40px',
            fontSize: '16px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#3700ff'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#3700ff'}
          onClick={() => alert('Переход к выбору мест...')}>
            КУПИТЬ БИЛЕТ
          </button>
        </div>
      </div>

      {/* Описание */}
      <div style={{
        marginBottom: '40px',
        lineHeight: '1.6',
        fontSize: '16px',
        opacity: 0.9
      }}>
        <h2 style={{
          fontSize: '24px',
          marginBottom: '15px',
          color: '#3700ff'
        }}>
          О фильме
        </h2>
        <p>{currentMovie.description}</p>
      </div>

      {/* Трейлер */}
      <div>
        <h2 style={{
          fontSize: '24px',
          marginBottom: '15px',
          color: '#3700ff'
        }}>
          Трейлер
        </h2>
        <div style={{
          position: 'relative',
          paddingBottom: '56.25%',
          height: 0,
          overflow: 'hidden',
          borderRadius: '10px',
          backgroundColor: '#000'
        }}>
          {!isVideoPlaying ? (
            <div 
              onClick={() => setIsVideoPlaying(true)}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                backgroundImage: `url(${currentMovie.poster})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}>
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: 'rgba(55, 0, 255, 1)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                <div style={{
                  width: 0,
                  height: 0,
                  borderLeft: '25px solid white',
                  borderTop: '15px solid transparent',
                  borderBottom: '15px solid transparent',
                  marginLeft: '5px'
                }}></div>
              </div>
            </div>
          ) : (
            <iframe
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%'
              }}
              src={`${currentMovie.trailer}?autoplay=1`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieComponent;
