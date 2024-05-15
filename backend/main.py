from fastapi import FastAPI, Response
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
from apps.roadmap import generate_mermaid
from mermaid.graph import Graph
import mermaid as md
from helper import remove_unnecessary_stuff, save_code

app = FastAPI()

origins = [
    "http://localhost:3000",
    "http://localhost:8000",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

SVG_FOLDER = "apps/generated/roadmaps"

@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/hello/{name}")
async def say_hello(name: str):
    return {"message": f"Hello {name}"}


@app.get("/code/{prompt}")
async def get_svg(prompt: str):
    code = generate_mermaid(prompt)
    code = remove_unnecessary_stuff(code)

    new_img_path = f'{SVG_FOLDER}/{prompt.replace(" ", "_")}.svg'
    # save_code(code, new_img_path)

    graph = Graph('flowchart', code)
    mermaid_diagram = md.Mermaid(graph)

    mermaid_diagram.to_svg(new_img_path)
    return {"img-url": f"http://localhost:8000/code-img/{prompt.replace(" ", "_")}"}

@app.get("/code-img/{prompt}")
async def get_generated_img(prompt: str):
    return FileResponse(f'{SVG_FOLDER}/{prompt.replace(" ", "_")}.svg')

