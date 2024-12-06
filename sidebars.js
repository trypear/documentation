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
    "quickstart",
    "demos",
    "at-commands",
    "add-new-model",
    "important-shortcuts",
    "tab-autocomplete",
    "pearai-inventory",
    "pearai-creator",
    "models-and-usage",
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
