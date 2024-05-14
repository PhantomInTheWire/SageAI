from fastapi import FastAPI, Response
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
async def get_svg(prompt: str, response: Response):
    generate_svg(prompt)
    response.headers["Content-Disposition"] = f"attachment; filename=backend/apps/file.svg"
    response.headers["Content-Type"] = "image/svg+xml"
    return FileResponse('backend/apps/file.svg', media_type="image/svg+xml")
