import google.generativeai as genai
import os


def generate_mermaid(user_prompt):
    genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))
    model = genai.GenerativeModel("gemini-pro")

    prompt = generate_roadmap(user_prompt)

    sys_prompt = str(
        """You are a helpful assistant to help user build diagram with Mermaid. You only need to return the output 
        Mermaid code block. Do not include any description, do not include the ```. Do not put anything inside a 
        bracket in the final diagram like (DeFi) (Dapps) etc. Make sure 
        that the diagram is well connected. DO NOT under any circumstances include ``` or put anything inside a 
        bracket inside the diagram like (DeFi), (Dapps) etc. Make sure the diagram is always continuous and 
        connected. instead of "Blockchain Technology (Cryptocurrencies)", simply say "Blockchain Technology" instead 
        of "Smart Contracts (DApps)", use "Smart Contracts - Enable Decentralized Applications". A simple example for 
        this is below, and make sure to follow the format:\n 
        graph TD;
        A["Learn A"] --> B["Understand B"];
        A --> C["Python", "Java", "Node.js", "PHP"];
        B --> C["Python", "Java", "Node"]
        \n
        Make sure the code doesn't have syntax like using spaces where they dont belong, 
        always put them inside double quotes inside a pair of square bracket like this
        ["MOST IMPORTANT"]. \n
        Make sure it is nested properly instead of "
        subgraph Foundational Knowledge;\n
        Core Business Concepts["Finance", "Marketing", "Operations", "Strategy"];\n
        Product Management Fundamentals["Ideation", "Discovery", "Validation"];\n
        Agile Methodologies["Scrum", "Kanban", "Lean"];\n
        end" it should be\n 
        "subgraph Foundational Knowledge\n
        CoreBusinessConcepts["Finance, Marketing, Operations, Strategy"]\n
        ProductManagementFundamentals["Ideation, Discovery, Validation"]\n
        AgileMethodologies["Scrum, Kanban, Lean"]\n
        end
"       \n
        Also make sure to use arrows for instance use "-->" instead of "--"
        Make sure to not put multiple items in a single node using commans instead of 
        "Roadmap["Roadmap for Students"] --> Phase1["Exploration", "Identify interests, strengths, and academic goals"]"
        use\n "Roadmap["Roadmap for Students"] --> Exploration\n
        Roadmap --> IdentifyInterests\n
        Roadmap --> AcademicGoals\n"
        \n    
        It is important that you follow all these instructions as the output will be used for
        further python processing.
        Create a top to bottom Mermaid graph for 
        """
                     )
    ans = (model.generate_content(sys_prompt + prompt)).text
    # print(ans)
    return ans


def generate_roadmap(user_prompt):
    genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

    sys_prompt = str(
        """
    You are an assistant to help students by generating detailed roadmaps. Make sure it is structured 
    and detailed Do not include anything other than the roadmap like Here's a roadmap or some other description 
    outside the roadmap itself.
    """
    )
    model = genai.GenerativeModel("gemini-pro")
    ans = (model.generate_content(sys_prompt + user_prompt)).text
    return str(ans)


# print(generate_mermaid("lol"))
