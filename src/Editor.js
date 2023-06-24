import './App.css';

export default function Editor({ markdown, handleChange, isMaximized, setMaximized }) {
  return (
    <div className='editorWrap' id='editorWrap'>
      <div className='toolbar'>
        <i className='fa fa-free-code-camp'></i>
         Editor
        {!isMaximized ? 
          <i className='fa fa-arrows-alt' onClick={() => setMaximized(true)}></i> :
          <i className="fa fa-compress" onClick={() => setMaximized(false)}></i>
        }
      </div>
      <textarea
        id='editor'
        value={markdown}
        onChange={handleChange}
        placeholder="Enter Markdown here"
      ></textarea>
    </div>
  );
}