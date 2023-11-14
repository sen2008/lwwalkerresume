FROM python:3.8-slim-buster

WORKDIR /app
COPY . /app

COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 80
CMD ["gunicorn", "-b", "0.0.0.0:80", "app:app"]
