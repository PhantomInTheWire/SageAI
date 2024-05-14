from fastapi import FastAPI, Response
from fastapi.responses import FileResponse
from apps.roadmap import generate_mermaid
from mermaid.graph import Graph
import mermaid as md

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/hello/{name}")
async def say_hello(name: str):
    return {"message": f"Hello {name}"}


@app.get("/code/{prompt}")
async def get_svg(prompt: str, response: Response):
    code = generate_mermaid(prompt)
    graph = Graph('flowchart', code)  # Create Graph object
    mermaid_diagram = md.Mermaid(graph)  # Create Mermaid object
    mermaid_diagram.to_svg('file.svg')  # Use to_svg() method
    response.headers["Content-Disposition"] = f"attachment; filename=file.svg"
    response.headers["Content-Type"] = "image/svg+xml"
    return FileResponse('file.svg', media_type="image/svg+xml")
