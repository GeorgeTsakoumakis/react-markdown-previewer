import './App.css';

export default function Preview({ renderMarkdown, isMaximized, setMaximized }) {
    return (
        <div className='previewWrap' id='previewWrap'>
        <div className='toolbar'>
        <i className='fa fa-free-code-camp'></i>
         Previewer
        {!isMaximized ? 
          <i className='fa fa-arrows-alt' onClick={() => setMaximized(true)}></i> :
          <i className="fa fa-compress" onClick={() => setMaximized(false)}></i>
        }
        </div>
        <div
            id='preview'
            dangerouslySetInnerHTML={renderMarkdown()}
        ></div>
        </div>
    );
    }