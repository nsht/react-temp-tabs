import React from 'react';


class SiteInput extends React.Component{
    urlInput = React.createRef();
    handleSubmit = e =>{
        // handle submit function in app which gets the time
        // from the timeselector componenent
        // then starts the timer display
        e.preventDefault();
        console.log(this.urlInput.current.value);
        var win = window.open(this.urlInput.current.value, '_blank');
        win.focus();
        setTimeout(function () { win.close();}, 3000);
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="url" placeholder="Enter Url" ref={this.urlInput}></input>
                <button>Open Url</button>
            </form>
        )


    }
}

export default SiteInput;