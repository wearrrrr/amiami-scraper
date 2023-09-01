# amiami-scraper

# What is this?

The goal for this project is to serve not only as a POC for bypassing TLS fingerprinting in NodeJS, but as a way for people to scrape amiami, this can be used to get information on when products are in stock.

Right now all this repo does is make an http request to the page and save the output JSON to a file, nothing fancy but a very strong starting point nonetheless. 

# Installing

Installation is simple, just git clone the repository, and run `npm start`. This project so far has absolutely no outside dependencies other than ones provided by NodeJS, HOWEVER will only work on Linux and OSX. This is because curl-impersonate does not have a proper windows build for some reason, but it still might be possible to build it.
