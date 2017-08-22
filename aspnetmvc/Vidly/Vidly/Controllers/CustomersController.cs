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
    public class CustomersController : Controller
    {
        // GET: Customers
        private VidlyContext _context;

        public CustomersController() {
            _context = new VidlyContext();
        }


        protected override void Dispose(bool disposing)
        {
            _context.Dispose();
        }

        public ActionResult New()
        {
            var membershipType = _context.MembershipType.ToList();
            var newCustomerViewModel = new NewCustomerViewModel()
            {
                MembershipType = membershipType
            };
            return View(newCustomerViewModel);
        }

        public ActionResult Create(Customer customer)
        {
            if(customer.Id == 0)
            {
                _context.Customers.Add(customer);
            }
            else 
            {
                var customerInDb = _context.Customers.Single(c => c.Id == customer.Id);
                customerInDb.Name = customer.Name;
                customerInDb.BirthDate = customer.BirthDate;
                customerInDb.MembershipTypeId = customer.MembershipTypeId;
                customerInDb.IsSubscribedToNewsletter = customer.IsSubscribedToNewsletter;
            }
           
            _context.SaveChanges();
            return RedirectToAction("Index", "Customers");

        }

        public ActionResult Index()
        {
            var customers = _context.Customers.Include(c => c.MembershipType).ToList();
            return View(customers);
        }

        public ActionResult Details(int id)
        {
            var customer = _context.Customers.Include(c => c.MembershipType).SingleOrDefault(c => c.Id == id);
            return View(customer);
        }

        public IEnumerable<Customer> GetCustomers()
        {
            return new List<Customer>{
                new Customer { Id = 1, Name = "Habib Al Saki"},
                new Customer { Id = 2, Name = "Faiz Ahmed Khan" }

            };
        }

        public ActionResult Edit(int id)
        {
            var customer = _context.Customers.SingleOrDefault(c => c.Id == id);
            if (customer == null)
                return HttpNotFound();
            var viewModel = new NewCustomerViewModel
            {
                Customer = customer,
                MembershipType = _context.MembershipType.ToList()
            };
            return View("New", viewModel);
        }
    }
}