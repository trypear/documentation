---
title: ⚙️ Core Features
description: PearAI is the open-source AI code editor to speed up your development
keywords: [core-features, intro, pearai, continue, cursor, autopilot, chatgpt]
---

# ⚙️ Core Features

- `CMD+I` - Inline code editing: PearAI will make changes to your current file and display diffs.

- `CMD+L` - New chat (if you have code selected, it also adds it to the chat).
- `CMD+SHIFT+L` - Append to current chat.

- **Address sign (@) commands**

  - `@filename/foldername`, `@docs` - Add files, folders or documentation. You can also choose to add your own documentation links by scrolling all the way down and clicking “Add Docs”.
  - Type `@codebase` to automatically retrieve the most relevant snippets from your codebase. Read more about indexing and retrieval here. You can also press `CMD/CTRL+ENTER` instead to directly use codebase context.
  - Type `@code` to reference specific functions or classes from throughout your project.
  - Type `@terminal` to reference the contents of your IDE's terminal.
  - Type `@diff` to reference all of the changes you've made to your current branch. This is useful if you want to summarize what you've done or ask for a general review of your work before committing.
  - Type `@problems` to reference problems in the current file.

- **Slash commands**

  - `/commit` - Generates a commit message for all your current changes.
  - `/cmd` - Generate a CLI command and paste it in the terminal directly.
  - `/edit` - Bring code to your chat with `CMD+L` or `CMD+SHIFT+L` (`CTRL` for Windows), then add `/edit` with the changes you want to generate code with diffs.
  - `/comment` - Works just like `/edit` but adds comments to your code
  - `/test` - Works just like `/edit` but makes unit tests for highlighted or provided code.

Quick terminal debug: Use `CMD+SHIFT+R` to add the last terminal text to your chat.

- **Custom slash commands**

      There are two primary ways to add custom slash commands:

      1. **Natural Language Prompts:**

         You can add custom slash commands by adding to the customCommands property in config.json.

         - `name`: Command name invoked with `/name`.
         - `description`: Brief description shown in the dropdown menu.
         - `prompt`: A templated prompt sent to the Language Learning Model (LLM).

         Ideal for reusing prompts frequently. For example, creating a command to check code for mistakes with a predefined prompt.

      2. **Custom Functions:**

         To create a custom function for slash commands, use `config.ts` instead of `config.json`. Push a new `SlashCommand` object to the `slashCommands` list, specifying the "name" (used to invoke the command), "description" (appears in the dropdown menu), and "run" (an async generator function that yields strings to be displayed in the UI). Allows for more advanced functionality, such as generating a commit message based on code changes, by writing custom TypeScript code.

          ```ts title="~/.pearai/config.ts"
          export function modifyConfig(config: Config): Config {
            config.slashCommands?.push({
              name: "commit",
              description: "Write a commit message",
              run: async function* (sdk) {
                const diff = await sdk.ide.getDiff();
                for await (const message of sdk.llm.streamComplete(
                  `${diff}\n\nWrite a commit message for the above changes. Use no more than 20 tokens to give a brief description in the imperative mood (e.g. 'Add feature' not 'Added feature'):`,
                  {
                    maxTokens: 20,
                  },
                )) {
                  yield message;
                }
              },
            });
            return config;
          }
          ```

      This flexibility enables you to create powerful and reusable custom commands tailored to your specific workflow needs.


- **🛠️ Setting Up Tab Autocomplete in PearAI**

        PearAI supports tab autocomplete, and this is how to set this up. Tab autocomplete predicts / suggests what you would type next as you’re coding!

  This is the guide to do that:

- **Setup Codestral**

        We recommend using **Codestral**, a leading model for code completion (or Fill In Middle - FIM). It's open-source and highly efficient. To get started, you'll need to obtain a Codestral API key from the [Mistral API](https://console.mistral.ai "Mistral API")

- **Add to PearAI config.json (Fill in “YOUR_API_KEY” with your API key.):**

        ```json
        "tabAutocompleteModel": {
          "title": "Codestral",
          "provider": "mistral",
          "model": "codestral-latest",
          "apiKey": "YOUR_API_KEY"
        }

- **Enjoy the development speed up with autocomplete!**