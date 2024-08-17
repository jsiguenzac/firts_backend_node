instalar librerias de manera global:
npm i typescript ts-node nodemon -g

iniciar proyecto typescript:
tsc --init
npm init -y

**para cargar archivos: npm i multer
**tipado: npm i @types/multer -D

instalar dependencias/librerias para express, typeorm, conectar con la bd Postgres, variables de entorno, manejo de cors:
npm install express typeorm pg pg-hstore dotenv cors

instalar paquetes de tipado:
npm i @types/express @types/dotenv @types/cors -D

Swagger: npm i swagger-ui-express swagger-jsdoc

Swagger tipado: npm i @types/swagger-ui-express @types/swagger-jsdoc -D

****otro****
npm install ts-node -D
npm install swagger-autogen
generar doc automagicamente:
npx ts-node src/swagger-autogen-config.ts