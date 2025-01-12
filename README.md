# aratrum-landing

## Информация

Репозиторий проекта "Разработка лендинговой страницы для сервиса сбора инициатив" команды Red Beams.

Доска задач и все ссылки лежат [тут](https://miro.com/app/board/uXjVLcBpIXM=/?share_link_id=89882612925).

## Инструкция по запуску (Windows)

1. Установите Python и Node.js.

Скачайте и установите [последнюю версию Python для Windows](https://www.python.org/downloads/), не забудьте поставить галочку около "Add Python to PATH": затем скачайте и установите [последнюю версию Node.js для Windows](https://nodejs.org/).

2. Скачайте и распакуйте исходный код с репозитория.

3. Откройте две командные строки в папках `frontend` и `backend`.

Для этого можно в поисковой строке Проводника ввести `cmd`.

4. В папке `frontend` запустите команды:

```cmd
npm install
```
Эта команда установит все зависимости для фронтенда. Теперь фронтенд готов к запуску.

```cmd
npm run dev
```
Этой командой можно запустить фронтенд сервер. Выключить его можно нажав Ctrl+C. Перезапускать сервер можно любое количество раз.

5. В папке `backend` запустите команды:

```cmd
python -m venv .v
.\.v\Scripts\activate.bat
pip install -r requirements.txt
```
Эти команды создадут и активируют виртуальную среду, а также установят все требуемые библиотеки.

```cmd
python djangobackend\manage.py migrate
```
Эта команда заставит Django создать пустую базу данных.

```cmd
set DJANGO_SUPERUSER_USERNAME=admin
set DJANGO_SUPERUSER_EMAIL=admin@admin.ru
set DJANGO_SUPERUSER_PASSWORD=1234
python djangobackend\manage.py createsuperuser --noinput
```
Эти команды создадут аккаунт администратора для входа в админ-панель. Теперь бэкенд готов к запуску.

```cmd
python djangobackend\manage.py runserver
```
Этой командой можно запустить бэкенд сервер. Выключить его можно нажав Ctrl+C. Перезапускать сервер можно любое количество раз.

6. Откройте страницу и админ-панель в браузере.

Сама страница лендинга доступна по адресу http://localhost:5173.

Админ-панель можно открыть через http://localhost:8000/admin. Реквизиты для входа: логин `admin` и пароль `1234`.






