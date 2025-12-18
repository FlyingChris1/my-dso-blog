# Baby tools shop

This project provides a minimal, fully containerized application setup using Docker. All necessary dependencies, migrations, and startup steps are handled during the image build, making the application ready to run immediately through an exposed port.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Quickstart](#Quickstart)
- [Usage](#Usage)

import GithubLinkAdmonition from '@site/src/components/GithubLinkAdmonition';

<GithubLinkAdmonition 
    link="https://github.com/FlyingChris1/Babyshop-Container"
    title="Github Tip" 
    type="tip"
>
Checkout this repository to see the code/implementation
</GithubLinkAdmonition>

## Prerequisites

- Python >= 3.9
- Docker engine

## Quickstart

- Clone the repository: 

```bash
ggit clone <REPOSITORY_URL>
cd <REPOSITORY_NAME>
```
- Build Docker image

```bash
docker build -t <Image-Name> .
```

- Start Docker Container

```bash
docker run -dt -p 8080:8080 <Image-Name>
```

## Usage

- Install Venv package

```bash
sudo apt install python:3.11-slim
```

- Create & activate Venv

```bash
python3 -m venv venv
source venv/bin/activate
```

- Install and Upgrade pip and requirements.txt

```bash
pip install --upgrade pip
pip install -r requirements.txt
```

- Install django

```bash
pip install django
```

- Migarte the database

```bash
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```