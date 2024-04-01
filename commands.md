# Build a Docker image from a Dockerfile

docker build -t vetor-node-login .

# Run a Docker container from an image

docker run -dp 8080:8080 --name vetor-node-login-container -v $(pwd):/usr/src/app vetor-node-login

# List all running Docker containers

docker ps

# Stop a running Docker container

docker stop mycontainer

# Remove a Docker container

docker rm vetor-node-login-container

# Remove a Docker image

docker rmi myimage

# list all images

docker images

# docker logs container

docker logs vetor-node-login-container
