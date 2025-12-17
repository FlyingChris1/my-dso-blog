# V-Server Setup

In this project, a secured virtual server was set up with SSH key authentication, and the NGINX web server was installed to display a customized HTML start page. Additionally, Git was configured and connected to GitHub via SSH for secure repository management.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Quickstart](#Quickstart)
- [Usage](#Usage)

import GithubLinkAdmonition from '@site/src/components/GithubLinkAdmonition';

<GithubLinkAdmonition 
    link="https://github.com/FlyingChris1/v-server-setup"
    title="Github Tip" 
    type="tip"
>
Checkout this repository to see the code/implementation
</GithubLinkAdmonition>

### Prerequisites

- Ready to use VM
- Git SSH connection

## Quickstart

- Clone the repository: 

```bash
git clone git@github.com:FlyingChris1/v-server-setup.git
cd v-server-setup
```

- Login to your machine
```bash
ssh <your_username>@<your_ip>
```

- Update & install Nginx
```bash
sudo apt update && sudo apt install -y nginx
```

## Usage

- Generate a ssh key pair
```bash
ssh-keygen -t ed22519
```

- SSH alias
```bash
alias <aliasName>="ssh -i ~/.ssh/<your_key> <username>@<your_ip>"
```

- Disable password Login
```bash
sudo nano /etc/ssh/ssh_config
```

- Create html document for Webserver
```bash
sudo touch /var/www/alternatives/alternate-index.html
```

- Create directory
```bash
mkdir /var/www/alternatives
```