---
layout: markdown
title: Cody Usage and Privacy Notice
---

Last modified: April 21, 2023


### Sourcegraph Cody
**Sourcegraph Cody (“Cody”)** is a state-of-the-art AI coding assistant designed to help software developers by answering code questions and generating code. Cody uses Large Language Models (LLMs), Sourcegraph search, and Sourcegraph code intelligence to provide context-specific results to developers, streamlining their workflow, reducing the time spent on repetitive tasks, and improving the quality and consistency of their work. You can access the private **beta** version of Cody through an editor extension. Cody will soon be available within the Sourcegraph application. 

### Accuracy
Cody uses context from your codebase to substantially improve the accuracy of its responses compared to other AI-based tools. However, Sourcegraph does not guarantee the accuracy of Cody's answers. 

### Ownership
As bewteen the parties, you own all inputs to and outputs generated by Cody. You retain ownership of your code and responsibility for ensuring your code complies with software licenses and copyright law. Cody may make use of language models trained on large datasets of publicly available code. It is your responsibility to verify any code snippets emitted by Cody comply with existing software licenses and copyright law.

### Acceptable use

You must follow the acceptable use policies of the following LLM providers:

[Anthropic Acceptable Use Policy](https://www.anthropic.com/aup)

### Indemnification
The indemnification provisions in your Sourcegraph governing terms will apply to claims alleging that your use of Cody infringes third-party intellectual property rights. You must use the most current version available and any available filters.

### No warranty
The experimental product may contain bugs, defects, and errors. Notwithstanding any other terms in your agreement with us, we provide the beta version of Cody “as is,” without warranties. 

### Other frequently asked questions
    
#### 1. Can you share information about the training set of the LLMs that Cody uses?

We do not train our own models today. The third-party LLMs available today that Cody may make use of are trained on large datasets of public repositories. You are responsible for ensuring that any Responses you use comply with copyright licenses. 

#### 2. What data does Sourcegraph collect when you use Cody and for what purpose?

Sourcegraph collects and uses the following data to support and improve user experience:

- **Usage Data** is usage and operations data in connection with your use of Cody, such as metrics on frequency and length of a user feature engagement. Usage Data does not contain personal data other than an anonymous user ID.
- **User Feedback** is any form of feedback that the user submits, including thumbs up and thumbs down clicks and comments or ideas shared for the purpose of giving feedback.


In addition, **when used with Sourcegraph Cloud**, Sourcegraph also collects and uses **Customer Content**, defined below, **solely to provide the Service** and **not** for product improvement purposes. Customer Content includes:

- **User Prompts** are user submissions to Cody, such as a query or request. Sourcegraph translates the User Prompt into search query syntax and uses the search query syntax to find relevant code snippets in your codebase. Sourcegraph then submits the search query syntax and relevant code snippets  (“**LLM Prompt**”) to a third-party LLM. 

- **Responses** are the outputs returned to you by Cody. 


For individual users accessing the Sourcegraph Cody extension via **Sourcegraph.com**, Sourcegraph also collects the following data, as defined above, to support and improve user experience, though none of it will be used to train any generally available models.

- User Prompts
- LLM Prompts
- Responses

#### 3. Will my Customer Content be used to train any generally available machine learning model?

No.

#### 4. Will my Customer Content be shared with third parties?

Yes. Cody sends LLM Prompts to a third-party LLM provider for the sole purpose of providing you the service. 
    
In addition, if an administrator turns on the feature to generate embeddings for a repository, a copy of the repository contents will be shared with a third-party LLM provider for the sole purpose of providing you the service.

#### 5. Will my Customer Content be retained by third parties?
   
No, Sourcegraph has obtained commitments from our LLM providers that they will not retain any input or output from the model, including embeddings, beyond the time it takes to generate the output **("Zero Retention")**. 

For more information, see [docs.sourcegraph.com/cody](https://docs.sourcegraph.com/cody).