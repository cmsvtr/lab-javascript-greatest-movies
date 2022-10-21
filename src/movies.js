// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map((movie) => {
        return movie.director;})
    return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielbergMovies = moviesArray.filter(movie => movie.director === `Steven Spielberg` && movie.genre.includes(`Drama`));
    return spielbergMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    moviesArray.forEach(movie => {
        if (!movie.score) {
            movie.score = 0;
        }
    })
    if (moviesArray.length) {
        const avgScore = moviesArray.reduce((pV, cV) => {
            return pV + cV.score/moviesArray.length;
        }, 0)
    return Math.round(avgScore*100)/100;    
    }else{
        return 0;
    }    
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    dramaMovies = moviesArray.filter(movie => movie.genre.includes(`Drama`));
    dramaMovies.forEach(movie => {
        if (!movie.score) {
            movie.score = 0;
        }
    })
    if (dramaMovies.length) {
        const avgScore = dramaMovies.reduce((pV, cV) => {
            return pV + cV.score/dramaMovies.length;
        }, 0)
    return Math.round(avgScore*100)/100;    
    }else{
        return 0;
    }  
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    moviesSortedYear = moviesArray.sort((a, b) => a.year - b.year);
    return moviesSortedYear

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
