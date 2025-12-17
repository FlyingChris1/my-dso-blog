# Wordpress

This repository provides a Docker-based WordPress environment consisting of
a WordPress container and a MySQL database container.


## Table of Contents

- [Prerequisites](#prerequisites)
- [Quickstart](#Quickstart)
- [Usage](#Usage)

import GithubLinkAdmonition from '@site/src/components/GithubLinkAdmonition';

<GithubLinkAdmonition 
    link="https://github.com/FlyingChris1/Wordpress-SQL-Container"
    title="Github Tip" 
    type="tip"
>
Checkout this repository to see the code/implementation
</GithubLinkAdmonition>

## Prerequisites

- Docker engine
- Docker compose

## Quickstart

- Clone the repository

```bash
git clone https://github.com/FlyingChris1/Wordpress.git
cd Wordpress
```

- convert example.env to .env

```bash
cp example.env .env
```

- Edit the .env with your credentials & information

```bash
nano .env
```

- Start Docker compose 

```bash
docker compose up -d
```

- access the project

```bash
http://<your IP>:8080
```

## Usage

- restart Container

```bash
docker compose restart
```

- stop Container

```bash
docker compose down -v
```

- Enter Wordpress Container

```bash
docker compose exec -it wordpress bash
```

- Get Docker Compose logs

```bash
docker compose logs
```