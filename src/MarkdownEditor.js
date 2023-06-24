import React, { useEffect, useState } from 'react';
import { marked } from 'marked';
import Editor from './Editor';
import Preview from './Preview';

const MarkdownEditor = () => {
  const [editorMaximized, setEditorMax] = useState(false);
  const [previewMaximized, setPreviewMax] = useState(false)
  const [markdown, setMarkdown] = useState(`# Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:
  
  Heres some code, \`<div></div>\`, between 2 backticks.
  
  \`\`\`
  // this is multi-line code:
  
  \`function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }\`
  \`\`\`
  
  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.
  
  There's also [links](https://www.freecodecamp.org), and
  > Block Quotes!
  
  And if you want to get really crazy, even tables:
  
  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | -------------
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.
  
  - And of course there are lists.
    - Some are bulleted.
       - With different indentation levels.
          - That look like this.
  
  
  1. And there are numbered lists too.
  1. Use just 1s if you want!
  1. And last but not least, let's not forget embedded images:
  
  ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`);

  const handleInputChange = (event) => {
    setMarkdown(event.target.value);
  };

  marked.setOptions({
    breaks: true,
    mangle: false,
    headerIds: false
  });

  const renderMarkdown = () => {
    return { __html: marked(markdown) };
  };
  
  useEffect (() => {
    const editor = document.getElementById('editorWrap');
    const preview = document.getElementById('previewWrap');
    if (!(editorMaximized || previewMaximized)) {
      /* remove hide class or maximized class from editor and preview */
      editor.classList.remove('hide');
      editor.classList.remove('maximized');
      preview.classList.remove('hide');
      preview.classList.remove('maximized');
    } else if (editorMaximized) {
      /* add hide class to preview and maximized class to editor */
      editor.classList.add('maximized');
      preview.classList.add('hide');
    } else if (previewMaximized) {
      /* add hide class to editor and maximized class to preview */
      editor.classList.add('hide');
      preview.classList.add('maximized');
    }
  })

  return (
    <div id='wrapper'>
      <Editor markdown={markdown} handleChange={handleInputChange} isMaximized={editorMaximized} setMaximized={setEditorMax}/>
      <Preview renderMarkdown={renderMarkdown} isMaximized={previewMaximized} setMaximized={setPreviewMax}/>
    </div>
  );
};

export default MarkdownEditor;
