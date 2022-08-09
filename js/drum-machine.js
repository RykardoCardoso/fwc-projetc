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
  
  /*class App extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        userInput: `# Welcome to my React Markdown Previewer!`
      }
  
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
  
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  );
  */