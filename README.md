## Pre Requisits

- Node 8+
- Npm
- Angular CLI 
- Docker

### BraviFrontend - Build with docker

- Build image: 
```
$ docker build -t bravi-frontend-angular .
```

- Run container:
```
$ docker run -d --name bravi-frontend -p 8002:80 bravi-frontend-angular
```

- Access:
```
http://localhost:8002/
```

### Contact

Email: ledson.dev@gmail.com  
Phone: 61 991740585
