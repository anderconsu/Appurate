# docker file for flask based api

FROM python:3.10

# set working directory
WORKDIR /app

# copy requirements.txt
COPY requirements.txt .

# install dependencies
RUN pip install -r requirements.txt

# copy app
COPY . .

# expose port
EXPOSE 5000

# run app
CMD ["python", "app.py"]