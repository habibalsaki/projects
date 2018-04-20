import logging
import sys
import requests
import re
import csv

def get_category_list(content):
    """get_category_list takes content of home page
    and returns a list of categories and their urls"""
    pass

def get_book_list(content):
    """get_book_list takes content of a book list page
    and returns a list of books (name and url)"""
    pass

def get_product_details(content):
    """get_product_details takes content of a product page,
    parses the page and reurns details about a product"""
    pass

def get_page_content(url):
    """get_page_content takes a url and returns the content
    of the page"""
    try:
        response = requests.get(url)
    except requests.exceptions.RequestException as e:
        logging.error(e)
    if response.ok:
        return response.text

    logging.error("Can not get content from URL: " + url)
    return None

def get_next_page(content):
    """Checks the content of a book list page and returns 
    link of the next page, returns None if there is no more 
    next page"""
    pass

def scrape_book_info(book_info, category_name):
    """gets the content of a book details page
    and parses different components and stores the info"""
    pass

def crawl_category(category_name, category_url):
    pass

def crawl_website():
    url = "http://books.toscrape.com/index.html"
    host_name = "books.toscrape.com"
    content = get_page_content(url)
    

if __name__ == "__main__":
    logging.basicConfig(format='%(asctime)s %(message)s', datefmt='%m/%d/%Y %I:%M:%S %p', \
    filename="bookstore_crawler.log", level=logging.DEBUG)
    with open("book_list.csv","w") as csvf:
        csv_writer = csv.DictWriter(csvf,fieldnames=["Name","Category","UPC","URL","ImageURL","Price","Availability","Description"])
        csv_writer.writeheader()



