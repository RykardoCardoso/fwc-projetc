$(function(){
	
  // Used to toggle the menu on small screens when clicking on the menu button
  $('.mobileMenuButton').click(function(event){
    event.preventDefault();
    toggleMenuMobile();
  });
  
  $('#navMobile a').click(function(){
    toggleMenuMobile();
  });
  
  function toggleMenuMobile() {
      var x = document.getElementById("navMobile");
      if (x.className.indexOf("active") == -1) {
          x.className += "active";
      } else {
          x.className = x.className.replace("active", "");
      }
  }
    
  //Smooth Scroll Up function
  $('.toTop').click(function(event) {
    event.preventDefault();
    $('html, body').animate({scrollTop: 0}, 500, "swing");
      return false;
  });
  
  });
  
  /* React */
  
  class App extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        userInput: `# Welcome to my React Markdown Previewer!
  
  ## This is a sub-heading...
  ### And here's some other cool stuff:
  
  Heres some code, \`<div></div>\`, between 2 backticks.
  
  \`\`\`
  // this is multi-line code:
  
  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
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
  
  ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
  `
      }
  
    }
    
    handleChange = (value)=>{
      this.setState({
        userInput: value
      });
    }
    
    render() {
      return (
        <div className="markdown-previewer">
          <Editor inputValue={this.state.userInput} handleChange={this.handleChange} />
          <Previewer inputValue={this.state.userInput} />
        </div>
      );
    }
  }
  
  class Editor extends React.Component {
  
    
    editorHandleChange(event) {
        this.props.handleChange(event.target.value);
    }
    
    render() {
      return (
        <div className="editor-main">
            <div className="editor-title">
              <h2><i className="fa fa-free-code-camp"></i> Editor</h2>
              <span id="editor-expander"></span>
            </div>
            <textarea id="editor" type="text" value={this.props.inputValue} onChange={this.editorHandleChange.bind(this)}></textarea>
          </div>
      );
    }
  }
  
  class Previewer extends React.Component {
    render() {
      return (
        <div className="previewer-main">
            <div className="previewer-title">
              <h2><i className="fa fa-free-code-camp"></i> Previewer</h2>
              <span id="previewer-expander"></span>
            </div>
            <MarkdownPreview markdown={this.props.inputValue} />
          </div>
      );
    }
  }
  
  // ALLOWS LINE BREAKS WITH RETURN BUTTON
  marked.setOptions({
    breaks: true,
    highlight: function (code) {
      return Prism.highlight(code, Prism.languages.javascript, 'javascript');
    }
  });
  
  // INSERTS target="_blank" INTO HREF TAGS (required for Codepen links)
  const renderer = new marked.Renderer();
  renderer.link = function (href, title, text) {
    return `<a target="_blank" href="${href}">${text}</a>`;
  };
  
  class MarkdownPreview extends React.Component {
    
    createMarkup() {
      return { __html: marked(this.props.markdown, { renderer: renderer }) }
    }
    
    render() {
      return (
        <div id="preview" dangerouslySetInnerHTML={this.createMarkup()}>
        </div>
      )
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  );
  