using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Vidly.Models;
using Vidly.ViewModels;
using System.Data.Entity;

namespace Vidly.Controllers
{
    public class MoviesController : Controller
    {
        private VidlyContext _context;

        public MoviesController() {
            _context = new VidlyContext();
        }

        protected override void Dispose(bool disposing)
        {
            _context.Dispose();
        }
        // GET: Movies
        public ActionResult Index()
        {
            var movies = _context.Movies.Include(m => m.Genres).ToList();
            return View(movies);
        }

        public ActionResult Details(int id)
        {
            var movie = _context.Movies.Include(m => m.Genres).SingleOrDefault(m => m.Id == id);
            return View(movie);
        }

        public ActionResult Random()
        {
            var movie = new Movie() { Name = "Company of Heroes" };
            var customers = new List<Customer>() {
                new Customer() {Name = "Habib Al Saki" },
                new Customer() {Name = "Faiz Ahmed Khan" }
            };

            var viewModel = new RandomMovieViewModel() {
                Movie = movie, Customers = customers
            };

            return View(viewModel); 
        }

        public List<Movie> GetMovies()
        {
            return new List<Movie>() {
                new Movie() {Name = "Company of Heroes" },
                new Movie() {Name = "Kal Ho Na Ho" }
            };
        }

        public ActionResult NewMovie()
        {
            var genre = _context.Genre.ToList();
            var viewModel = new NewMovieViewModel
            {
                Genre = genre
            };
            return View(viewModel);
        }

        public ActionResult SaveMovie(Movie movie)
        {
            if(movie.Id == 0)
            {
                _context.Movies.Add(movie);
            }
            else 
            {
                var movieInDb = _context.Movies.Single(m => m.Id == movie.Id);
                movieInDb.Name = movie.Name;
                movieInDb.NumberInStock = movie.NumberInStock;
                movieInDb.GenreId = movie.GenreId;
                movieInDb.ReleaseDate = movie.ReleaseDate;
                movieInDb.DateAdded = movie.DateAdded;
            }

            _context.SaveChanges();
            return RedirectToAction("Index", "Movies");
        }

        public ActionResult EditMovie(int id)
        {
            var movie = _context.Movies.SingleOrDefault(m => m.Id == id);
            if (movie == null)
                return HttpNotFound();
            var viewModel = new NewMovieViewModel
            {
                Movie = movie,
                Genre = _context.Genre.ToList()
            };
            return View("NewMovie", viewModel);
        }
    }
}