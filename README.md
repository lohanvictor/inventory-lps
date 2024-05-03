# Inventory LPs

### Summary

- [Inventory LPs](#inventory-lps)
  - [Summary](#summary)
  - [Description](#description)
  - [Project Setup](#project-setup)
    - [Packages](#packages)
    - [Running dev mode](#running-development-environment)

## Description

This application is an API for cataloging my collection of vinyls. It consumes an external API to search vinyl/albums, then after choosing the vinyl, it adds the chosen one to a collection of the Mongo database. At first, Spotify API was used for the search of vinyl/albums, so after it was adapted to consume any APIs. Actually, it consumes the Discogs API.

## Project Setup

### Packages

| Package  | Version  |
| -------- | -------- |
| Node     | v18.19.1 |
| Docker   | v24.0.2  |

You'll need [Node.js](https://nodejs.org) installed on your computer in order to build this app. The [Docker](https://www.docker.com/) will be used to deploy this app in the Docker container.

### Running Dev Mode

It was created a shell script to execute the docker compose command for starting the Mongo container and API container.

```bash
$ sh start.sh 
```
