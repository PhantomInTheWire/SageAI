from fastapi import FastAPI
from apps import roadmap

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/hello/{name}")
async def say_hello(name: str):
    return {"message": f"Hello {name}"}


@app.get("/code/{prompt}")
async def get_code(prompt: str):
    return {"ans": roadmap.generate_mermaid(prompt)}
