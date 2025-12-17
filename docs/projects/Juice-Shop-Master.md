# Juice Shop Master

This repository provides information on metadata, XSS and Kali Linux. The goal is to show the vulnerabilities of websites and show you how people could abuse them to get to your information or even build in code that is not supposed to be on your website.

## Disclaimer

This documentation is for teaching porpuses only and not ment to be used for ilegal porpuses!


## Table of Contents

- [Prerequisites](#prerequisites)
- [Quickstart](#Quickstart)
- [Challanges](#Challanges)


## Prerequisites

- Kali Linux
- OWASP Juice-Shop

## Quickstart

- Download kali Linux and launch it on a VM or as your main OS on your device

```bash
https://www.kali.org/get-kali/#kali-platforms
```

- Clone and launch the OWASP Juice-Shop repository

```bash
sudo apt install nodejs
sudo apt install npm
git clone https://github.com/juice-shop/juice-shop.git
cd juice-shop
npm install 
npm start
```


## Challanges

- [XSS attack](Juice-Shop-Master-XSS)
- [Metadata exploit](Juice-Shop-Master-Meta-Geo-Stalking)
