from langchain_google_genai import ChatGoogleGenerativeAI


def generate_mermaid(user_prompt):
    # genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

    model = ChatGoogleGenerativeAI(model="gemini-1.5-flash", temperature=0)

    prompt = generate_roadmap(user_prompt)

    sys_prompt = str(
        """You are a helpful assistant to help user build diagram with Mermaid. Think of a diagram that
        would suit the given prompt well. Once you do that take a step back and analyse it for syntax issues
        like missing commas or missing quotes. Write everything in camel case. Once you are sure there are no
        errors and everything is according to format output only the mermaid codeblock.
        Here is an example of what the output must look like: \n
        ```
        graph LR
        A[Square Rect] -- Link text --> B((Circle))
        A --> C(Round Rect)
        B --> D{Rhombus}
        C --> D
        ```
     
    This is the given prompt: \n
        """
                     )
    ans = (model.invoke(sys_prompt + prompt)).content
    print(ans)

    return ans


def generate_roadmap(user_prompt):
    sys_prompt = str(
        """
    You are an assistant to help students by generating detailed roadmaps. Make sure it is structured 
    and detailed Do not include anything other than the roadmap like Here's a roadmap or some other description 
    outside the roadmap itself. 
    """
    )
    model = ChatGoogleGenerativeAI(model="gemini-1.5-flash", temperature=0)
    ans = (model.invoke(sys_prompt + user_prompt))
    # print(ans)
    return ans.content


# print(generate_mermaid("lol"))
