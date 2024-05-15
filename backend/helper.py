from re import sub

LEFT_PARENTHESIS_PATTERN = r"[^A-Z]c*(\()|[^A-Z]c*(\{)"
RIGHT_PARENTHESIS_PATTERN = r"\w(\))|\w(\})"

def remove_unnecessary_stuff(code: str) -> str:
    code = sub(LEFT_PARENTHESIS_PATTERN, "->", code)
    code = sub(RIGHT_PARENTHESIS_PATTERN, "", code)
    code = code.replace('```mermaid\n', '').replace('```', '').replace('_', ' ')
    return code

def save_code(code:str, path:str) -> None:
    path = path.replace(".svg", "_code.md")
    with open(path, 'w', encoding="utf-8") as file:
        file.write(code)

