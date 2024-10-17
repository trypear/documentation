/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    "index",   
    {
      "type": "category",
      "label": "🖥️ Getting Started",
      "items": [
      "install",
      "preview",
      ],
    },
    {
      "type": "category",
      "label": "🚀 Setup",
      "items": [
        "overview",
        "configuration",
        "context-providers",
        "model-providers",
        "select-models"
      ]
    },
    "quickstart",
    "demos",
    "important-shortcuts",
    "tab-autocomplete",
    "codebase-context",
    "common-use-cases",
    {
      type: "link",
      label: "📝 Changelog",
      href: "https://trypear.ai/changelog",
    },
    "contributors",
  ],
};

module.exports = sidebars;
