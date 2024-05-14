from openai import OpenAI
import mermaid as md
from mermaid.graph import Graph


def generate_mermaid(user_prompt):
    client = OpenAI()

    prompt = generate_roadmap(user_prompt)

    completion = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system",
             "content": "You are an assistant to help user build diagram with Mermaid."
                        "You only need to return the output Mermaid code block."
                        "Do not include any description, do not include the ```."
                        "Do not put anything inside a bracket in the final diagram like (DeFi) (Dapps) etc"
                        "Do not make the diagram horizontal or disconnected"
                        "Make the diagram as detailed and aligned to the original prompt as much as you can."
             },
            {"role": "user", "content": prompt}
        ]
    )

    return completion.choices[0].message.content


def generate_roadmap(user_prompt):
    client = OpenAI()

    completion = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system",
             "content": "You are an assistant to help students by generating detailed roadmaps."
                        "Make sure it is structured and detailed"
                        "Do not include anything other than the roadmap like Here's a roadmap"
                        " or some other description outside the roadmap itself"},
            {"role": "user", "content": user_prompt}
        ]
    )

    return completion.choices[0].message.content


def generate_svg(prompt):
    code = generate_mermaid(prompt)
    graph = Graph('flowchart', code)  # Create Graph object
    mermaid_diagram = md.Mermaid(graph)  # Create Mermaid object
    mermaid_diagram.to_svg('file.svg')  # Use to_svg() method
