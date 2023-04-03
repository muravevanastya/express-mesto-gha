[![Tests](../../actions/workflows/tests-13-sprint.yml/badge.svg)](../../actions/workflows/tests-13-sprint.yml) [![Tests](../../actions/workflows/tests-14-sprint.yml/badge.svg)](../../actions/workflows/tests-14-sprint.yml)
# Проект Mesto фронтенд + бэкенд

__Ссылка на репозиторий__: https://github.com/muravevanastya/express-mesto-gha

---
## Роуты
### Для пользователей:
* <code>GET /users</code> — возвращает всех пользователей
* <code>GET /users/:userId</code> - возвращает пользователя по _id
* <code>POST /users</code> — создаёт пользователя
* <code>PATCH /users/me</code> — обновляет профиль
* <code>PATCH /users/me/avatar</code> — обновляет аватар

### Для карточек:
* <code>GET /cards</code> — возвращает все карточки
* <code>POST /cards</code> — создаёт карточку
* <code>DELETE /cards/:cardId</code> — удаляет карточку по идентификатору
* <code>PUT /cards/:cardId/likes</code> — поставить лайк карточке
* <code>DELETE /cards/:cardId/likes</code> — убрать лайк с карточки 


## Директории

`/routes` — папка с файлами роутера  
`/controllers` — папка с файлами контроллеров пользователя и карточки   
`/models` — папка с файлами описания схем пользователя и карточки  
  
## Запуск проекта

`npm run start` — запускает сервер   
`npm run dev` — запускает сервер с hot-reload
