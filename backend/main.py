from fastapi import FastAPI
from fastapi.responses import FileResponse

from apps.roadmap import generate_svg

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/hello/{name}")
async def say_hello(name: str):
    return {"message": f"Hello {name}"}


@app.get("/code/{prompt}")
async def get_svg(prompt: str):
    generate_svg(prompt)
    return FileResponse('apps/file.svg', media_type="image/svg+xml")
