-> para verificar se o docker ta rodando = docker ps
-> para startar: docker start pg
-> para acessar o bd:  docker exec -it pg bash
  * passa o usuario root
  * \l -> exibe todas as tabelas do banco
  * \c -> para conectar no banco de dados (mycontacts)
-> dps disso: node src/database/index.js
-> yarn dev
