# Truck-Signs-API

A Django REST API for managing truck sign designs, images, and metadata.
This repository contains the backend service running inside a Docker container and designed to work together with a PostgreSQL database container.


## Table of Contents

- [Prerequisites](#prerequisites)
- [Quickstart](#Quickstart)
- [Usage](#Usage)

import GithubLinkAdmonition from '@site/src/components/GithubLinkAdmonition';

<GithubLinkAdmonition 
    link="https://github.com/FlyingChris1/Truck-Signs-API"
    title="Github Tip" 
    type="tip"
>
Checkout this repository to see the code/implementation
</GithubLinkAdmonition>

## Prerequisites

- Docker engine

## Quickstart
1. Clone the repository.

```bash
git clone https://github.com/FlyingChris1/Truck-Signs-API.git
cd Truck-Signs-API
```

2. convert simple_env_config.env to .env.

```bash
cd truck_signs_api/truck_signs_designs/settings
cp simple_env_config.env .env
```

3. Edit the .env with your credentials & information.

```bash
cd truck_signs_api/truck_signs_designs/settings
nano .env
```

4. build docker image.

```bash
docker build -t <Your_image_name> .
```

5. Create Docker-Network.

```bash
docker network create <your_network_name>
```


6. build your database-container.

```bash
docker run -d \
  --name db \
  --network <your_network_name> \
  -e POSTGRES_DB=<DB_name> \
  -e POSTGRES_USER=<your_user> \
  -e POSTGRES_PASSWORD=<your_password> \
  -v truck_pgdata:/var/lib/postgresql/data \
  postgres:15
```

7. build your django-container.

```bash
docker run -d \
  --name web \
  --network <your_network_name> \
  --env-file truck_signs_api/truck_signs_designs/settings/.env \
  -p 8020:80 \
  <your_image_name>
```

8. migrate your database.

```bash
docker exec -it web python truck_signs_api/manage.py migrate
```

9. Check if it is up and running.

```bash
enter in your webbrowser
http://<your ip>:8020/admin
```

## Usage

- create superuser

```bash
docker exec -it web python truck_signs_api/manage.py createsuperuser
```

- restart Container

```bash
docker restart <container_id>
```

- stop Container

```bash
docker stop <container_id>
```

- Enter Container

```bash
docker  exec -it <container_id> bash
```

- Get Container logs

```bash
docker <container_id> logs
```