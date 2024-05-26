import streamlit as st
from dotenv import load_dotenv
import os
import replicate
from utils import debounce_run_function

# Define the pre-prompt
PRE_PROMPT = "You are a helpful personal assistant. You do not respond as 'User' or pretend to be 'User'. You only respond once as a Personal Assistant."

# Load environment variables
load_dotenv()

# Get the Replicate API token from the environment variable
try:
    REPLICATE_API_TOKEN = os.getenv('REPLICATE_API_TOKEN')
    if not REPLICATE_API_TOKEN:
        raise ValueError("Error loading API token")
except Exception as e:
    st.error(str(e))
    REPLICATE_API_TOKEN = st.text_input("Enter your Replicate API token:")

# Initialize Replicate client with the API token
if REPLICATE_API_TOKEN:
    replicate.Client(api_token=REPLICATE_API_TOKEN)

# Define the debounced function to get a response from the model
@debounce_run_function
def get_response(prompt):
    model = st.session_state['model']
    response = replicate.run(
        model,
        input={"prompt": f"{PRE_PROMPT} {prompt}"}
    )
    return response

# Main function for the Streamlit app
def main():
    st.title("Blogging Assistant Chatbot")
    
    # Initialize session state variables
    if 'history' not in st.session_state:
        st.session_state['history'] = []
    
    if 'model' not in st.session_state:
        st.session_state['model'] = "a16z-infra/llama7b-v2-chat:4f0a4744c7295c024a1de15e1a63c880d3da035fa1f49bfd344fe076074c8eea"
    
    # User input for prompt and model selection
    prompt = st.text_input("Enter your prompt:")
    model_option = st.selectbox(
        "Choose your model",
        ["Llama2-7B", "Llama2-13B"]
    )
    
    # Update the selected model
    if model_option == 'Llama2-7B':
        st.session_state['model'] = 'a16z-infra/llama7b-v2-chat:4f0a4744c7295c024a1de15e1a63c880d3da035fa1f49bfd344fe076074c8eea'
    elif model_option == 'Llama2-13B':
        st.session_state['model'] = 'a16z-infra/llama13b-v2-chat:df7690f1994d94e96ad9d568eac121aecf50684a0b0963b25a41cc40061269e5'
    
    # Get response on button click
    if st.button("Get Response"):
        if REPLICATE_API_TOKEN:
            response = get_response(prompt)
            st.session_state['history'].append({"user": prompt, "bot": response})
        else:
            st.error("Please enter a valid Replicate API token.")
    
    # Display chat history
    for chat in st.session_state['history']:
        st.write(f"User: {chat['user']}")
        st.write(f"Bot: {chat['bot']}")
    
    # "Ack" button to navigate back to the blog app
    if st.button("Ack"):
        st.write("Navigating back to the blog app...")
        # Replace this URL with the actual URL of blog 
        st.markdown("[Back to Blog App](https://your-blog-app-url.com)", unsafe_allow_html=True)

# Run the main function
if __name__ == "__main__":
    main()
